// import { nanoid } from 'nanoid';
import Container from './Container';
import Form from 'components/Form';
import Contact from 'components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { changeFilter } from 'redux/Filter/filterReducer';
// import { removeContact, addContact } from 'redux/Contacts/contactsReducer';

export default function App() {
  return (
    <Container>
      <h1>PhoneBook</h1>
      <Form />
      <Contact />
      <ToastContainer />
    </Container>
  );
}
