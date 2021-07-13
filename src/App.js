import { useState } from 'react';
import TaskBar from './components/TaskBar';
import DesktopGrid from './components/DesktopGrid';
import Window from './components/Window';

const App = () => {
  const [information, setInformation] = useState(false);
  const [windows, setWindows] = useState([]);

  const openWindow = (setFunc, name) => {
    setFunc(true);
    const newWindows = [...windows, name];
    setWindows(newWindows);
  }

  const closeWindow = (setFunc, name) => {
    setFunc(false);
    const newWindows = windows.filter((w) => w !== name);
    setWindows(newWindows);
  };

  return (
    <div className="app">
      <DesktopGrid
        onInformationClick={() => openWindow(setInformation, 'Información')}
      />

      { information && <Window title="Información" onClose={() => closeWindow(setInformation, 'Información') } /> }

      <TaskBar windows={windows} />
    </div>
  );
}

export default App;
