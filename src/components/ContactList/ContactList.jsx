import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteButton }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          {`${contact.name}: ${contact.number} `}
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => handleDeleteButton(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
