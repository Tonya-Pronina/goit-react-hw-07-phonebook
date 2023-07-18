import React from 'react';
import css from 'components/Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/FilterSlice';
import { getFilter } from 'components/redux/Selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <div className={css.contactsFilter}>
      <title className={css.filterTitle}>Find contacts by name</title>
      <input
        className={css.input}
        name="filter"
        type="text"
        placeholder="search..."
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilter}
      />
    </div>
  );
};
