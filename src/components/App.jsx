import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filtrer';
import { addContact, deleteContact } from '../redux/contactSlice';
import { setStatusFilter } from '../redux/filterSlice';
import { getFilter, getContacts } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleAddContact = contact => {
    const isInPhonebook = contacts.some(
      phoneContact =>
        phoneContact.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInPhonebook) {
      alert(`${contact.name} is already in contacts.`);
    } else {
      dispatch(addContact(contact.name, contact.number));
    }
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};
