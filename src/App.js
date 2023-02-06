import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideNavbar />
      <Home />
    </div>
  );
}

export default App;
