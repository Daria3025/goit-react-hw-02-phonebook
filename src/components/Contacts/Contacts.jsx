import { Component } from "react";

export class Contacts extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="button">Add contact</button>
        <h2>Contacts</h2>
      </>
    );
  }
}