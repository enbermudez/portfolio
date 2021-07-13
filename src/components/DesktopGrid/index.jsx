import PropTypes from 'prop-types';
import DesktopIcon from '../DesktopIcon';

const initCons = (funcs) => ([
  { id: 1, text: 'Información', icon: 'user_card', func: funcs.onInformationClick },
  { id: 2, text: 'Contacto', icon: 'msn', func: '' },
  { id: 3, text: 'Certificados', icon: 'certificate', func: '' },
  { id: 4, text: 'Experiencia', icon: 'script', func: '' },
  { id: 5, text: 'Proyectos', icon: 'briefcase', func: '' },
  { id: 6, text: 'Tecnologías', icon: 'console', func: '' },
  { id: 7, text: 'FAQ', icon: 'help', func: '' },
]);

const DesktopGrid = ({
  onInformationClick,
}) => {
  const icons = initCons({ onInformationClick });

  return (
    <div className="desktop-grid">
      {icons.map(({ id, text, icon, func }) => (
        <DesktopIcon key={id} text={text} icon={icon} onClick={() => func()} />
      ))}
    </div>
  );
};

DesktopGrid.propTypes = {
  onInformationClick: PropTypes.func.isRequired,
};

export default DesktopGrid;
