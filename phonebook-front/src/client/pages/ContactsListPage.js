import React, {Component} from 'react';
import { Table, Button, ProgressBar, Col, Modal } from 'react-materialize';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contacts';
import axios from 'axios';

class ContactsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };

    this.onDelete = this.onDelete.bind(this);
  }
  
  componentDidMount() {
    const res = this.props.fetchContacts();
    res.then(() => this.setState({ isLoading: false }));
  }
 
  onDelete(event) {
    const id = event.target.id;
    axios({
      method: 'delete',
      url: `http://phonebook-send4.local/api/contacts/${id}`
    }).then(() => {
      this.props.fetchContacts();
    }).catch(() => alert('É necessário remover as mensagens antes de remover o contato.'));
  }

  renderRows(contact) {          
    return (
      <tr key={contact.id}>
        <td>{contact.name} {contact.lastname}</td>
        <td>{contact.email}</td>
        <td>{contact.phone_number}</td>
        <td>
          <Col s={2} className='grid-example'>
            <Button floating  waves='light' icon='email' node='a' href={`/messages-contact/${contact.id}`} />
          </Col>
          <Col s={2} className='grid-example'>
            <Button floating waves='light' icon='edit' node='a' href={`/edit-contacts/${contact.id}`} />
          </Col>
          <Col s={2} className='grid-example'>
            <Modal
                trigger={<Button floating waves='light' icon='delete_forever' />}>
                <p>Tem certeza que deseja remover esse contato ?</p>
                <Button waves='light' id={contact.id} onClick={this.onDelete} >Remover</Button>
            </Modal>
          </Col>
        </td>
      </tr>
    )
  }

  render () {
    if (this.state.isLoading) {
      return (
        <div>
          <Col s={12}>
            <ProgressBar />
          </Col>
        </div>
      );      
    } else if (this.props.contacts.length > 0) {
      return (
        <div>
          <Table>
            <thead>
              <tr>
                <th data-field="name">Nome</th>
                <th data-field="preco">Email</th>
                <th data-field="acoes">Telefone</th>
                <th data-field="acoes">Ações</th>
              </tr>
            </thead>
    
            <tbody>
              {this.props.contacts.map(contact => {
                return this.renderRows(contact);
              })}
            </tbody>
          </Table>
        </div>
      );
    } else {
      return (
         <div>
           <h4>Não existem contatos a serem listados.</h4>
         </div>
      );
    }
  }
}

function mapStateToProps(state) {  
  return { contacts: state.contacts };
}

function loadData(store) {
  return store.dispatch(fetchContacts());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchContacts }) (ContactsListPage)
};