import { Component } from 'react';
import { ContactsList } from './App.styled';
import { NewContactForm } from './NewContactForm/NewContactForm';
import { ListOfContacts } from './ListOfContacts/ListOfContacts';
import storage from '../utils/storage.js';

export class App extends Component {

  state = {
    contacts: [],
  };

  componentDidMount() {
    const storageValue = storage.load(storage.KEY_CONTACTS);
    this.setState({ contacts: storageValue || [] });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      storage.save(storage.KEY_CONTACTS, this.state.contacts);
    }
  }

  onSubmitForm = (id, value, phone) => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { id, name: value, phone }] };
    });
  };

  onRemoveContact = (id) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contactInfo => contactInfo.id !== id) }));
  };

  render() {
    return (
      <ContactsList>
        <NewContactForm
          contacts={this.state.contacts}
          onSubmit={this.onSubmitForm}
        />
        <ListOfContacts
          contacts={this.state.contacts}
          onRemoveContact={this.onRemoveContact} />
      </ContactsList>
    );
  }
}
