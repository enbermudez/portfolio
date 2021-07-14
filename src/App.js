import { useState, useEffect } from 'react';
import TaskBar from './components/TaskBar';
import DesktopGrid from './components/DesktopGrid';
import Window from './components/Window';
import DesktopIcon from './components/DesktopIcon';

const sections = [
  {
    id: 1,
    name: 'Información',
    content: '¡Hola! Mi nombre es Enrique Bermúdez y este es mi portafolio. Soy ingenierio en computación y desarrollador web de 25 años.\n\nActualmente vivo en Santa Fe, Argentina y trabajo como desarrollador frontend en MercadoLibre.\n\nInvierto mi tiempo libre en ver series/películas, jugar (y programar) videojuegos, mirar partidos de fútbol y molestar a mi perra: Fiora.\n\nLas ventanas del portafolio funcionan como lo harían en Windows 98, así que puedes minimizarlas, maximizarlas, cerrarlas o incluso moverlas de un sitio a otro. ¡Los íconos del escritorio no están de adorno! Intenta hacer click en alguno de ellos.',
    icon: 'user_card',
  },
  {
    id: 2,
    name: 'Contacto',
    content: '---',
    icon: 'msn',
  },
  {
    id: 3,
    name: 'Certificaciones',
    content: '---',
    icon: 'certificate',
  },
  {
    id: 4,
    name: 'Experiencia',
    content: '---',
    icon: 'script',
  },
  {
    id: 5,
    name: 'Proyectos',
    content: '---',
    icon: 'briefcase',
  },
  {
    id: 6,
    name: 'Tecnologías',
    content: '---',
    icon: 'console',
  },
  {
    id: 7,
    name: 'FAQ',
    content: '---',
    icon: 'help',
  },
];

const App = () => {
  const [windows, setWindows] = useState([]);
  const [icons, setIcons] = useState([]);

  const closeWindow = (id) => {
    if (windows.find((w) => w.id === id)) {
      const newWindows = windows.filter((w) => w.id !== id);
      setWindows(newWindows);
    }
  };

  useEffect(() => {
    const openWindow = (id, name) => {
      if (!windows.find((w) => w.id === id)) {
        const newWindows = [...windows, { id, name, active: true }];
        setWindows(newWindows);
      }
    }

    const initSections = () => {
      const newIcons = sections.map(({ id, name, icon }) => {
        return (
          <DesktopIcon
            key={id}
            text={name}
            icon={icon}
            onClick={() => openWindow(id, name)}
          />
        );
      });

      setIcons(newIcons);
    };

    initSections();
  }, [windows]);

  useEffect(() => {
    setWindows([{ id: 1, name: 'Información', active: true }]);
  }, []);

  return (
    <div className="app">
      <DesktopGrid icons={icons} />

      {
        !!windows.length && windows.map((window) => {
          const section = sections.find((s) => s.id === window.id);

          return (
            <Window
              key={section.id}
              title={section.name}
              content={section.content}
              onClose={() => closeWindow(section.id) }
            />
          );
        })
      }

      <TaskBar windows={windows} />
    </div>
  );
}

export default App;
