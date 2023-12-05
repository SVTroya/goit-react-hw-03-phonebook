import { Component } from 'react';
import { ContactsList } from './App.styled';
import { NewContactForm } from './NewContactForm/NewContactForm';
import { ListOfContacts } from './ListOfContacts/ListOfContacts';
import Storage from '../utils/storage'

export class App extends Component {

  state = {
    contacts: [],
  };

  componentDidMount() {
    const storageValue = Storage.load(Storage.KEY_CONTACTS)
    this.setState({contacts: storageValue || []})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(prevState.contacts) !== JSON.stringify(this.state.contacts)) {
      Storage.save(Storage.KEY_CONTACTS, this.state.contacts)
    }
  }

  onSubmitForm = (id, value, phone) => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { id: id, name: value, phone: phone }] };
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
