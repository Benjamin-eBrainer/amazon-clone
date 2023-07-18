import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Amazon Clone</h1>
      <Outlet />
    </div>
  );
}

export default App;
