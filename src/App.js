import TaskBar from './components/TaskBar';
import DesktopGrid from './components/DesktopGrid';
import Window from './components/Window';

const App = () => {
  return (
    <div className="app">
      <DesktopGrid />

      <Window title="Ventana de prueba" />

      <TaskBar/>
    </div>
  );
}

export default App;
