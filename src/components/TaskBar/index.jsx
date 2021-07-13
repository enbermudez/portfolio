import PropTypes from 'prop-types';
import Button from '../Button';

const TaskBar = ({ windows }) => {
  return (
    <div className="task-bar">
      <Button text="Inicio" bold icon="windows-0" />

      {windows.map((window) => (
        <span className="task-bar--window">{window}</span>
      ))}
    </div>
  );
};

TaskBar.propTypes = {
  windows: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TaskBar;
