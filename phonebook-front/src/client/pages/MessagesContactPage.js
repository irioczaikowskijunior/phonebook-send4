import React, { Component } from 'react';
import {Card, Col, ProgressBar, Modal, Button} from 'react-materialize';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchMessages } from '../actions/messages';

class MessagesContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {      
      isLoading: true
    };

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(event) {
    const message_id = event.target.id;
    const contact_id = this.props.match.params.id;

    axios({
      method: 'delete',
      url: `http://phonebook-send4.local/api/messages/${message_id}`
    }).then(() => {
      this.props.fetchMessages(contact_id);
    }).catch((ret) => alert(ret.msg));
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchMessages(id)
    .then(() => {
      this.setState({
        isLoading: false
      });
    });
  }  

  render() {
    if(this.state.isLoading) {
      return (
        <div>
          <Col s={12}>
            <ProgressBar />
          </Col>
        </div>
      );
    } else {
      return (
        <div>
            {this.props.messages.map((message, index) => {
              const link_to_edit = `/edit-message/${message.id}`;
              return (
                <Col m={12} s={12} key={index.toString()}>
                  <Card className='blue-grey darken-1' textClassName='white-text' title='Mensagem:' 
                  actions={[
                    <div className='left'>
                      <a href={link_to_edit} >Editar</a>
                    </div>,
                    <Modal header='Editar Mensagem' trigger={<a>Remover</a>}>    
                      <p>Tem certeza que deseja remover essa mensagem ?</p>
                      <Button waves='light' id={message.id} onClick={this.onDelete} >Remover</Button>
                    </Modal>                    
                  ]}>
                    {message.message}
                  </Card>
                </Col>
              )
            })}
        </div>
      );
    }   
  }
}

function mapStateToProps(state) {
  return { messages: state.messages };
}

function loadData(store) {  
  return store.dispatch(fetchMessages());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchMessages })(MessagesContactPage)
};