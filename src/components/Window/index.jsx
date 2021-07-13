import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import IconButton from '../IconButton';

const Window = ({ title }) => {
  return (
    <Draggable bounds="body">
      <div className="window box">
        <div className="window--title">
          <div className="window--text">{title}</div>

          <div className="window--icons">
            <IconButton icon="minimize" />
            <IconButton icon="maximize" />
            <IconButton icon="close" />
          </div>
        </div>
      </div>
    </Draggable>
  );
};

Window.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Window;
