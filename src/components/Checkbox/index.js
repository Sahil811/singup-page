import "./index.scss";

const Checkbox = ({ children, id, value, checkboxFunction }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id="checkbox-component"
        name="checkbox-component"
        value={value}
        onChange={() => checkboxFunction(value)}
      />
      <label htmlFor="checkbox-component">{children}</label>
    </div>
  );
};

export default Checkbox;
