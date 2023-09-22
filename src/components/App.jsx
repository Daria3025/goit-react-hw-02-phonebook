import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
    handleSubmit = e => {
      e.preventDefault();
      this.addContact();
    };
  render() {return (
    <div>
  <h1>Phonebook</h1>
      <ContactForm onSubmit={this.handleSubmit} addContact={this.addContact} />

  <h2>Contacts</h2>
  <Filter />
  <ContactList contacts={this.state.contacts} />
</div>
  );
}
};
