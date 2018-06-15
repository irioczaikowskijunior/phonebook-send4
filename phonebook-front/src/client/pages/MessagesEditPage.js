import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contacts';
import { fetchMessage } from '../actions/messages';
import {Row, Input, Button, Icon, Col, ProgressBar} from 'react-materialize';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class MessageEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {      
      isLoading: true,
      redirect: false,
      redirect_path: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {    
    const id = this.props.match.params.id;
    const promise1 = this.props.fetchMessage(id);
    const promise2 = this.props.fetchContacts();
    
    Promise.all([promise1, promise2]).then(() => {
      this.setState({
        isLoading: false
      });
    });
  }  

  handleSubmit(event){
    event.preventDefault();
    
    const message_id = this.props.match.params.id;
    const contact_id = event.target.contact_id.value;
    const message = event.target.message.value;

    if(!message || !contact_id)
      alert('Preencha o form corretamente');    
    else {

      var bodyFormData = {
        message: message,
        contact_id: contact_id
      }

      axios({
        method: 'put',
        url: `http://phonebook-send4.local/api/messages/${message_id}`,
        data: bodyFormData
      }).then(() => 
        this.setState({ 
          redirect: true,
          redirect_path: `/messages-contact/${contact_id}`
        })
      ).catch(() => {        
        alert('Ocorreu um erro ao salvar as informações, por favor, contate o administrador do sistema.')
      });

    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={this.state.redirect_path}/>;
    }

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
          <Row>
            <h4>Adicionar mensagem</h4>
            <form onSubmit={this.handleSubmit}>
              <Input s={12} type='select' label='Selecione um contato' defaultValue='2' name='contact_id' >
                {this.props.contacts.map(contact =>{
                    return <option key={contact.id} value={contact.id}>{contact.name} {contact.lastname}</option>
                })}        
              </Input>
              <Input type='textarea' validate s={12} placeholder="Mensagem *" name="message" defaultValue={this.props.message.message} ><Icon>email</Icon></Input>
              <Button className="btn-small" waves='light' type="submit" >Enviar<Icon right>send</Icon> </Button>
            </form>
          </Row>
      );
    }   
  }
}

function mapStateToProps(state) {
  return { 
    contacts: state.contacts,
    message: state.message
  };
}

function loadData(store) {  
  return ( 
    store.dispatch(fetchMessage),
    store.dispatch(fetchContacts())
  );  
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchContacts, fetchMessage })(MessageEditPage)
};