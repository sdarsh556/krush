import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import MoodHub from './components/MoodHub';
import MoodPage from './components/MoodPage';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const location = useLocation();
  // Optional: You can derive current section from location.pathname for styling if needed,
  // but Navbar (NavLink) handles its own active state.

  return (
    <div className="app">
      <BackgroundAnimation />
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/moods" element={<MoodHub />} />
        <Route path="/mood/:moodId" element={<MoodPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
