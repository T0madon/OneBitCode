import PropTypes from "prop-types";

Input.propTypes = {
  passSize: PropTypes.number.isRequired,
  setPassSize: PropTypes.func,
};

export default function Input(props) {
  return (
    <input
      type="number"
      id="passSize"
      min={1}
      value={props.passSize}
      onChange={(ev) => props.setPassSize(+ev.target.value)}
    />
  );
}
