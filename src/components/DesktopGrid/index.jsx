import DesktopIcon from '../DesktopIcon';

const DesktopGrid = () => {
  return (
    <div className="desktop-grid">
      <DesktopIcon text="Información" icon="user_card" />
      <DesktopIcon text="Contacto" icon="msn" />
      <DesktopIcon text="Certificados" icon="certificate" />
      <DesktopIcon text="Experiencia" icon="script" />
      <DesktopIcon text="Proyectos" icon="briefcase" />
      <DesktopIcon text="Tecnologías" icon="console" />
      <DesktopIcon text="FAQ" icon="help" />
    </div>
  );
};

DesktopGrid.propTypes = {};

export default DesktopGrid;
