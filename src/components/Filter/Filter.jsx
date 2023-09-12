export const Filter = ({ name, handleFilterChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={name}
        onChange={handleFilterChange}
        className="form-control"
      />
    </>
  );
};
