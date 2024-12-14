function Textfield({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor="phoneNumber">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="textField__input"
      />
    </div>
  );
}

export default Textfield;
