import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

const publicUrl = process.env.PUBLIC_URL;

const DesktopIcon = ({ text, icon }) => {
  return (
    <Draggable bounds="body">
      <div className="desktop-icon">
        <img className="desktop-icon--icon" src={`${publicUrl}/icons/${icon}.png`} alt={icon} />
        <div className="desktop-icon--text">{text}</div>
      </div>
    </Draggable>
  );
};

DesktopIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default DesktopIcon;
