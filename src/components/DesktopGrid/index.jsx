import PropTypes from 'prop-types';

const DesktopGrid = ({ icons }) => <div className="desktop-grid">{icons}</div>;

DesktopGrid.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default DesktopGrid;
