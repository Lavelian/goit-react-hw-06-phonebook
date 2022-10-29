import { Formik, Field } from 'formik';
import { FormBox, Button } from './Form.styled';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/contactsSlice';

const initialValues = {
  name: '',
  number: '',
};

export default function Form() {
  const contacts = useSelector(({ contacts }) => contacts);
  const dispatch = useDispatch();
  const handleSabmit = ({ name, number }, { resetForm }) => {
    if (isDuplicate(name, number)) {
      resetForm();
      return toast('There is already a contact');
    }
    dispatch(addContact({ name, number, id: nanoid() }));
    resetForm();
  };
  const isDuplicate = (name, number) => {
    return contacts.find(
      contact => contact.name === name && contact.number === number
    );
  };

  return (
    <Formik onSubmit={handleSabmit} initialValues={initialValues}>
      <FormBox>
        <label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add to Contact</Button>
      </FormBox>
    </Formik>
  );
}
