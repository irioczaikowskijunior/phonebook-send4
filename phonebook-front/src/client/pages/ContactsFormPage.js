import React, { Component } from 'react';
import {Row, Input, Button, Icon} from 'react-materialize';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class ContactsFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email : '',
      phone_number : '',
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(event){
    event.preventDefault();
    
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
        method: 'post',
        url: 'http://phonebook-send4.local/api/contacts/',
        data: bodyFormData
      }).then(() => this.setState({ redirect: true }))
      .catch((ret) => {
        alert('Ocorreu um erro ao salvar as informações, por favor, contate o administrador do sistema.')
      });
    }
  }

  validateEmail(email) 
  {
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

    return (
      <Row>
          <form onSubmit={this.handleSubmit}>
            <Input validate placeholder="Nome *" name="name"  s={12} onChange={this.handleChange} ><Icon>account_circle</Icon></Input>
            <Input validate s={12} placeholder="Sobrenome *" name="lastname" onChange={this.handleChange} ><Icon>account_circle</Icon></Input>
            <Input type="email" validate s={12} placeholder="Email *" name="email" onChange={this.handleChange} ><Icon>email</Icon></Input>
            <Input validate s={12} placeholder="Telefone *" name="phone_number" onChange={this.handleChange} ><Icon>phone</Icon></Input>
            <Button className="btn-small" waves='light' type="submit" >Enviar<Icon right>send</Icon> </Button>
          </form>
      </Row>
    );
  }
}

export default {
  component: ContactsFormPage
};
