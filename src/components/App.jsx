import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import {Section} from './Section/Section';
import { FormContact } from './FormContact/FormContact';
import {ListContact} from './ListContact/ListContact';
import {Filter} from './FilterContact/FilterContact';

export const App = () => {

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  )
  const [filter, setFilter] = useState('');


  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
    
  }, [contacts]);
  
  useEffect(() => {
  
},[])


  const createContact = data => {
    const newContact = { ...data, id: nanoid() };
    // console.log(newContact);


  contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase())? alert(`${data.name} is already in contacts.`)
  :setContacts(contacts => [newContact, ...contacts]);


  };

 const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  const getFilterContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  }

    return (
      <>
        <Section title="Phonebook">
          <FormContact createContact={createContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            value={filter}
            handleChangeFilter={handleChangeFilter}
          />
          <ListContact
            contacts={getFilterContacts()}
            deleteContact={deleteContact}
          />
        </Section>
      </>
    );
}
  
// state = {
//     contacts: [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
//     filter: '',
//   };



//   componentDidMount() {
//     const localContacts = localStorage.getItem('contacts')
//     if(localContacts) this.setState({contacts: JSON.parse(localContacts)})
// }


//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts)
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//   }
//   createContact = data => {
//     const newContact = { ...data, id: nanoid() };
//     console.log(newContact);

//     this.state.contacts.find(
//       ({ name }) => name.toLowerCase() === data.name.toLowerCase()
//     )
//       ? alert(`${data.name} is already in contacts.`)
//       : this.setState(prevState => ({
//           contacts: [...prevState.contacts, newContact],
//         }));
//   };

//   handleChangeFilter = ({ target }) => {
//     this.setState({
//       [target.name]: target.value,
//     });
//   };

//   getFilterContacts = () => {
//     return this.state.contacts.filter(({ name }) =>
//       name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };
