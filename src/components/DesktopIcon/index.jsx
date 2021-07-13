import PropTypes from 'prop-types';

const publicUrl = process.env.PUBLIC_URL;

const DesktopIcon = ({ text, icon }) => {
  return (
    <div role="button" className="desktop-icon">
      <img className="desktop-icon--icon" src={`${publicUrl}/icons/${icon}.png`} alt={icon} />
      <div className="desktop-icon--text">{text}</div>
    </div>
  );
};

DesktopIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default DesktopIcon;
