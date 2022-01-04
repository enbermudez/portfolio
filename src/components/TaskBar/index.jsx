import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';

const TaskBar = ({ windows }) => {
  return (
    <div className="task-bar">
      <Button text="Inicio" bold icon="windows-0" />

      {windows.map(({ name, active }, idx) => {
        const classes = classNames('task-bar--window', [{ 'task-bar--window-active': active }]);

        return (
          <span key={idx} className={classes}>{name}</span>
        )
      })}
    </div>
  );
};

TaskBar.propTypes = {
  windows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    active: PropTypes.bool,
  })).isRequired,
}

export default TaskBar;
