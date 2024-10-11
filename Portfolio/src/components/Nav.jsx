import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import './Nav.css'; 

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light custom-spacing" to="/">
          About
        </Link>,
        <Link key={2} className="nav-link text-light custom-spacing" to="/projects">
          Projects
        </Link>,
        <Link key={3} className="nav-link text-light custom-spacing" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link text-light custom-spacing" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}