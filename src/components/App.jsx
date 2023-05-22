import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    let contactsFromStorage = localStorage.getItem('contacts');
    let parsedContacts = JSON.parse(contactsFromStorage);
    // console.log('parsedContacts', parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = index => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(element => element.id !== index),
      };
    });
  };

  checkNameRepeat = name => {
    let arrNameToLowerCase = this.state.contacts.map(item =>
      item.name.toLowerCase()
    );
    return arrNameToLowerCase.includes(name.toLowerCase());
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  layOutFilteredContact = () => {
    return this.state.contacts.filter(item =>
      item.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase().trim())
    );
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h1>Contacts</h1>
        <Filter
          handleChangeFilter={this.handleChangeFilter}
          value={this.state.filter}
        />
        <ContactList
          contacts={this.layOutFilteredContact()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
