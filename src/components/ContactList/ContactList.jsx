export const ContactList = ({ contacts, onDelete }) => {
  const handleDeleteClick = id => {
    onDelete(id);
  };
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => handleDeleteClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
