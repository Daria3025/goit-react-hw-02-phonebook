import { Component } from "react";
import { nanoid } from "nanoid";

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  addContact = () => {
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };
    render() {
        return <form>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.handleChange}
        value={this.state.name}
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        pattern="+?d{1,4}?[ .-s]?(?d{1,3}?)?[ .-s]?d{1,4}[ .-s]?d{1,4}[ .-s]?d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={this.state.number}
        onChange={this.handleChange}
      />
      <button type="submit">Add contact</button>
    </form>
  }
}