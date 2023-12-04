import { Component } from 'react';

import { Contact } from '../Contact/Contact';
import PropTypes from 'prop-types';
import { HeaderContainer, ListWrapper } from './ListOfContacts.styled';
import { Filter } from '../Filter/Filter';

export class ListOfContacts extends Component {

  state = {
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
      }),
    ),
    onRemoveContact: PropTypes.func,
  };

  getContactsItems(contacts, filter) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onRemoveContact={this.props.onRemoveContact}/>
        </li>
      ));
  }

  onInputChange = (inputName, value) => {
    this.setState({ [inputName]: value });
  };

  render() {
    return (
      <ListWrapper>
        <HeaderContainer><h3>Contacts</h3>
          <Filter filter={this.state.filter} onChange={this.onInputChange} /></HeaderContainer>
        <ul>
          {this.getContactsItems(this.props.contacts, this.state.filter)}
        </ul>
      </ListWrapper>
    );
  }
}
