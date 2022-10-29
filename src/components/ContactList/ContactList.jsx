import { LiItem, ContactsList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/Contacts/contactsSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts = [] }) => contacts);
  const filter = useSelector(({ filter }) => filter);
  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(
      ({ name, number }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        number.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <LiItem key={id}>
          <span>{name + ':'}</span> <span>{number}</span>
          <button type="button" onClick={() => dispatch(removeContact(id))}>
            Delete
          </button>
        </LiItem>
      ))}
    </ContactsList>
  );
}
