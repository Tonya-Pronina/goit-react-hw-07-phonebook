import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import css from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const contactSearch = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contactSearch.map(({ name, number, id }) => (
        <li className={css.user} key={id}>
          <ContactListItem name={name} number={number} />
          <button className={css.btn} onClick={() => handleDeleteContact(id)}>
            remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
