import PropTypes from 'prop-types';
import classNames from 'classnames';

const publicUrl = process.env.PUBLIC_URL;

const Button = ({ text, bold, icon }) => {
  const classes = classNames('button', [{ 'button--bold': bold }]);

  return (
    <button type="button" className={classes}>
      { icon && <img className="button--icon" src={`${publicUrl}/icons/${icon}.png`} alt={icon} /> }
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
