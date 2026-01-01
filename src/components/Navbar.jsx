import { Home, Heart, Images } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <NavLink
                    to="/"
                    className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
                    end
                >
                    <Home size={20} />
                    <span>Home</span>
                </NavLink>
                <NavLink
                    to="/moods"
                    className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
                >
                    <Heart size={20} />
                    <span>Moods</span>
                </NavLink>
                <NavLink
                    to="/gallery"
                    className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
                >
                    <Images size={20} />
                    <span>Memories</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
