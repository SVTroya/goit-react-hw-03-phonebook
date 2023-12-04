import { Component } from 'react';
import { ContactsList } from './App.styled';
import { NewContactForm } from './NewContactForm/NewContactForm';
import { ListOfContacts } from './ListOfContacts/ListOfContacts';

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
  };

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
          onRemoveContact={this.onRemoveContact}/>
      </ContactsList>
    );
  }
}
