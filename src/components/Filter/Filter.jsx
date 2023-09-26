export const Filter = ({ filter, setFilter }) => {
  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <>
      <label>
        Find contact by name{' '}
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </>
  );
};
