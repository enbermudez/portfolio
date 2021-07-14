import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import IconButton from '../IconButton';

const Window = ({ title, content, onClose }) => {
  return (
    <Draggable bounds="body">
      <div className="window">
        <div className="window--title">
          <div className="window--text">{title}</div>

          <div className="window--icons">
            <IconButton icon="minimize" />
            <IconButton icon="maximize" />
            <IconButton icon="close" onClick={onClose} />
          </div>
        </div>

        <div className="window--content">{content}</div>
      </div>
    </Draggable>
  );
};

Window.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Window;
