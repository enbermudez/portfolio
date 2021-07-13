import DesktopIcon from '../DesktopIcon';

const icons = [
  { text: 'Información', icon: 'user_card' },
  { text: 'Contacto', icon: 'msn' },
  { text: 'Certificados', icon: 'certificate' },
  { text: 'Experiencia', icon: 'script' },
  { text: 'Proyectos', icon: 'briefcase' },
  { text: 'Tecnologías', icon: 'console' },
  { text: 'FAQ', icon: 'help' },
];

const DesktopGrid = () => {
  return (
    <div className="desktop-grid">
      {icons.map(({ text, icon }) => (
        <DesktopIcon text={text} icon={icon} />
      ))}
    </div>
  );
};

DesktopGrid.propTypes = {};

export default DesktopGrid;
