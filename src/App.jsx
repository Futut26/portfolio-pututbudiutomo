import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Footer, Navbar } from './components';
import { About, Contact, Home, Projects, DetailProject } from './pages';

import sakura from './assets/sakura.mp3';
import { useEffect, useRef, useState } from 'react';
import { soundoff, soundon } from "./assets/icons";

const App = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/projects/:id" element={<DetailProject />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
        <div className="bottom-2 left-2 fixed">
          <img src={!isPlayingMusic ? soundoff : soundon} alt="jukebox" onClick={() => setIsPlayingMusic(!isPlayingMusic)} className="w-10 h-10 cursor-pointer object-contain" />
        </div>
      </Router>
    </main>
  );
};

export default App;
