import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Home from './components/Home';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Stories from './components/Stories';
import Publish from './components/Publish';
import Storyfull from './components/Storyfull';

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Navbar />
        <SideNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login  setProgress={setProgress} />} />
          <Route path="/signup" element={<Signup  setProgress={setProgress}/>} />
          <Route path="/stories" element={<Stories  setProgress={setProgress}/>} />
          <Route path="/publish" element={<Publish  setProgress={setProgress}/>} />
          <Route path="/story/:id" element={<Storyfull  setProgress={setProgress}/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
