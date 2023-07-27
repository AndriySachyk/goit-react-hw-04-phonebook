import PropTypes from 'prop-types';

import { Component } from "react";
import { Form, ButtonForm } from './FormContact-style';


export class FormContact extends Component{

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value, 
    });
  };


  handleSubmit = event => {
    event.preventDefault();

    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };
    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                    value={this.state.name}
                    />
                <label htmlFor="number">Number</label>
                <input
                    type="tel"
                    name="number"
                    id="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                    value={this.state.number}
                />
                <ButtonForm type="submit">Add Contact</ButtonForm>
                </Form>
            </>
        )
    }
}



FormContact.propTypes = {
    createContact: PropTypes.func.isRequired,
}