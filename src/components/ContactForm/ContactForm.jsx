import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  initialState = {
    name: '',
    number: '',
  };
  state = this.initialState;

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  addContact = e => {
    const {
      initialState,
      props: { onSubmit },
      setState,
      state: { name, number },
    } = this;
    e.preventDefault();
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    onSubmit(newContact);
    setState(initialState);
  };

  render() {
    const {
      addContact,
      handleChange,
      state: { name, number },
    } = this;
    return (
      <form onSubmit={addContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="+?d{1,4}?[ .-s]?(?d{1,3}?)?[ .-s]?d{1,4}[ .-s]?d{1,4}[ .-s]?d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
