import { useState, useEffect } from 'react';
import TaskBar from './components/TaskBar';
import DesktopGrid from './components/DesktopGrid';
import Window from './components/Window';
import DesktopIcon from './components/DesktopIcon';
import sections from './data/sections';

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
