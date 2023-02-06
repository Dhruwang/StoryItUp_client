import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SideNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
