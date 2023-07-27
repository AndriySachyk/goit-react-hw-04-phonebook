import PropTypes from 'prop-types';

import { useState } from "react";
import { Form, ButtonForm } from './FormContact-style';


export const FormContact = ({createContact}) => {

 

const [name, setName]= useState('')
const [number, setNumber]= useState('')

  
  
const handleChange = ({ target : {name , value}}) => {
  if (name === 'name') setName(value)
  if (name === 'number') setNumber(value)
};
  
  
const handleSubmit = event => {
event.preventDefault();

  const data = {
  name, number
}
  
createContact(data)
  
  setName('')
  setNumber('')
  
};
  
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          />
      <label htmlFor="number">Number</label>
      <input
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
          />
      <ButtonForm type="submit">Add Contact</ButtonForm>
      </Form>
    </>
)
}
    
    
    
      // handleChange = ({ target }) => {
      //   this.setState({
      //     [target.name]: target.value, 
      //   });
      // };
    
    
      // handleSubmit = event => {
      //   event.preventDefault();
    
      //   this.props.createContact({
      //     name: this.state.name,
      //     number: this.state.number,
      //   });
      //   this.setState({
      //     name: '',
      //     number: '',
      //   });
      // };
    
    
    FormContact.propTypes = {
      createContact: PropTypes.func.isRequired,
}