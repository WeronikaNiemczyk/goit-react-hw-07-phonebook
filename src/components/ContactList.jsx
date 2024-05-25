import React from 'react';
import {  useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './App.module.css';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id ) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};

const ContactItem = ({ contact, deleteContact }) => {
  const onDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li>
      <div>
        {contact.name} - {contact.number}
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
