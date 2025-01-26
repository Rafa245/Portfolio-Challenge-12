import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 py-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Rafael Guerra</div>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-blue-300 transition transform duration-200 ease-in-out hover:scale-125"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-300 transition transform duration-200 ease-in-out hover:scale-125"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-white hover:text-blue-300 transition transform duration-200 ease-in-out hover:scale-125"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-300 transition transform duration-200 ease-in-out hover:scale-125"
          >
            Contact
          </Link>
          <Link
            to="/resume"
            className="text-white hover:text-blue-300 transition transform duration-200 ease-in-out hover:scale-125"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
