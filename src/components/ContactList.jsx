import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../redux/contactSlice';
import { getFilter, getContacts } from '../redux/selectors';
import './App.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
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
