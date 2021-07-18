import "./index.scss";

const Button = ({ text, icon, clickFunction }) => {
  return (
    <button className="button" type="button" onClick={clickFunction}>
      <div className="button_content">
        <div>{text}</div>
        <div>
          <img src={icon} alt="button-icon" />
        </div>
      </div>
    </button>
  );
};

export default Button;
