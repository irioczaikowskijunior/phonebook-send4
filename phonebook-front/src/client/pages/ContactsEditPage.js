import React, { Component } from 'react';
import {Row, Input, Button, Icon, ProgressBar, Col} from 'react-materialize';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContact } from '../actions/contacts';

class ContactsEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email : '',
      phone_number : '',
      redirect: false,
      isLoading: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const res = this.props.fetchContact(id);

    res.then(() => {
      this.setState({
        name: this.props.contact.name,
        lastname: this.props.contact.lastname,
        phone_number: this.props.contact.phone_number,
        email: this.props.contact.email,
        isLoading: false
      });
    });

  }
  
  handleSubmit(event){
    event.preventDefault();
    const id = this.props.match.params.id

    if(!this.state.name || !this.state.lastname || !this.state.email || !this.state.phone_number)
      alert('Preencha o form corretamente');
    else if( !this.validateEmail(this.state.email)) 
      alert('Preencha em e-mail válido');
    else {
      var bodyFormData = {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        phone_number: this.state.phone_number,
        redirect: false
      }

      axios({
        method: 'put',
        url: `http://phonebook-send4.local/api/contacts/${id}`,
        data: bodyFormData
      }).then(() => this.setState({ redirect: true }))
      .catch((ret) => {        
        alert('Ocorreu um erro ao salvar as informações, por favor, contate o administrador do sistema.')
      });
    }
  }

  validateEmail(email) {
      var re = /\S+@\S+/;
      return re.test(email);
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  render() {
    const { redirect } = this.state;
    
    if (redirect) {
      return <Redirect to='/'/>;
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
        <div>
          <Row>
              <form onSubmit={this.handleSubmit}>
                <Input validate placeholder="Nome *" name="name"  s={12} value={this.state.name} onChange={this.handleChange} ><Icon>account_circle</Icon></Input>
                <Input validate s={12} placeholder="Sobrenome *" name="lastname" value={this.state.lastname} onChange={this.handleChange} ><Icon>account_circle</Icon></Input>
                <Input type="email" validate s={12} placeholder="Email *" name="email" value={this.state.email} onChange={this.handleChange} ><Icon>email</Icon></Input>
                <Input validate s={12} placeholder="Telefone *" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} ><Icon>phone</Icon></Input>
                <Button className="btn-small" waves='light' type="submit" >Enviar<Icon right>send</Icon> </Button>
              </form>
          </Row>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { contact: state.contact };
}

function loadData(store) {  
  return store.dispatch(fetchContact());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchContact })(ContactsEditPage)
};