import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Home from './pages/Home';
import Players from './pages/player/Player';
import Champions from './pages/Champions';
import Teams from './pages/Teams';
import MatchHistory from './pages/MatchHistory';
import Settings from './pages/Settings';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'left' }}>
      <NavBar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/players' element={<Players />} />
          <Route path='/champions' element={<Champions />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/match-history' element={<MatchHistory />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
