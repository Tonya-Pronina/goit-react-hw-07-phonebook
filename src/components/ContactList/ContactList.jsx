// import React from 'react';
// import css from 'components/ContactList/ContactList.module.css';
// import ContactListItem from 'components/ContactListItem/ContactListItem';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from '../redux/Operations';
// import { getFilter, getContacts } from 'components/redux/Selectors';

// export const ContactList = () => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const searchContact = contacts.filter(({ name }) => {
//     return name.toLowerCase().includes(filter.toLowerCase());
//   });

//   const onDeleteContact = id => {
//     dispatch(deleteContact(id))
//       .unwrap()
//       .catch(error => console.log(error));
//   };

//   return (
//     <ul className={css.list}>
//       {searchContact.map(({ name, number, id }) => {
//         return (
//           <li className={css.item} key={id}>
//             <ContactListItem name={name} number={number} />

//             <button className={css.btn} onClick={() => onDeleteContact(id)}>
//               Remove
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../redux/Selectors';
import { deleteContact } from '../redux/Operations';
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
