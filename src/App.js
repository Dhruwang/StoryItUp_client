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
import Investor from './components/Investor';
import InvestorRegister from './components/InvestorRegister';
import Admin from './components/Admin';
import About from './components/About';

function App() {
  const [progress, setProgress] = useState(0)

  
  function decodeToken(token) {
    var ca = token;
    var base64Url = ca.split('.')[1];
    var decodedValue = JSON.parse(window.atob(base64Url));
    return decodedValue.user
}
  return (
    <div className="App">
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Admin decodeToken={decodeToken} />
        <Navbar decodeToken={decodeToken}/>
        <SideNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login  setProgress={setProgress} decodeToken={decodeToken} />} />
          <Route path="/signup" element={<Signup  setProgress={setProgress} decodeToken={decodeToken}/>} />
          <Route path="/stories" element={<Stories  setProgress={setProgress} decodeToken={decodeToken}/>} />
          <Route path="/publish" element={<Publish  setProgress={setProgress} decodeToken={decodeToken}/>} />
          <Route path="/investor" element={<Investor  setProgress={setProgress} decodeToken={decodeToken}/>} />
          <Route path="/about" element={<About  setProgress={setProgress} decodeToken={decodeToken}/>} />
          <Route path="/story/:id" element={<Storyfull  setProgress={setProgress} decodeToken={decodeToken}/>} />
          <Route path="/investorRegister" element={<InvestorRegister  setProgress={setProgress} decodeToken={decodeToken}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
