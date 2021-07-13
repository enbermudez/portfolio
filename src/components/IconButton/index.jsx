import PropTypes from 'prop-types';
import classNames from 'classnames';

const publicUrl = process.env.PUBLIC_URL;

const IconButton = ({ icon }) => {
  const classes = classNames('icon-button--image', `icon-button--${icon}`);

  return (
    <div role="button" className="icon-button">
      <img className={classes} src={`${publicUrl}/icons/${icon}.png`} alt={icon} />
    </div>
  );
};

IconButton.propTypes = {
  icon: PropTypes.oneOf([
    'minimize',
    'maximize',
    'close',
  ]),
};

export default IconButton;
