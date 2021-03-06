import PropTypes from 'prop-types';

const publicUrl = process.env.PUBLIC_URL;

const DesktopIcon = ({ text, icon, onClick }) => {
  return (
    <div className="desktop-icon" onClick={onClick}>
      <img className="desktop-icon--icon" src={`${publicUrl}/icons/${icon}.png`} alt={icon} />
      <div className="desktop-icon--text">{text}</div>
    </div>
  );
};

DesktopIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DesktopIcon;
