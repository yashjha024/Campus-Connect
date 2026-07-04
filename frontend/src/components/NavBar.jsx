import { useState } from "react";
import logo from "/src/assets/Birla_Institute_of_Technology_Mesra.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUserTie,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import LandingPage from "./LandingPage";

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => setDropDown(!dropDown);

  return (
    <nav className="sticky top-0 z-50 py-3 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 text-white shadow-xl transition-all">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3 group">
            <img className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" src={logo} alt="BIT Logo" />
            <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Campus Connect
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-3 text-sm font-medium">
          <Link
            to="/interview-experiences"
            className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-indigo-500/50 hover:text-blue-400 transition-all duration-200"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2 text-indigo-400" />
            Interview Experiences
          </Link>
          
          <Link
            to="/public-user"
            className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-indigo-500/50 hover:text-blue-400 transition-all duration-200"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2 text-indigo-400" />
            Search Student
          </Link>
          <Link
            to="/log"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-200"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Student Login
          </Link>
          <Link
            to="/log.a"
            className="px-4 py-2 rounded-lg border border-red-500/30 bg-red-950/30 hover:bg-red-900/50 text-red-300 hover:text-white transition-all duration-200"
          >
            <FontAwesomeIcon icon={faUserTie} className="mr-2 text-red-400" />
            Admin Login
          </Link>
          <Link
            to="/faculty-login"
            className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-indigo-500/50 hover:text-blue-400 transition-all duration-200"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2 text-indigo-400" />
            Faculty Login
          </Link>
        </div>
        <button
          onClick={toggleDropDown}
          className="lg:hidden p-2 border border-slate-800 rounded-lg bg-slate-900 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={dropDown ? faTimes : faBars} />
        </button>
      </div>
      {dropDown && (
        <div className="absolute right-4 top-16 z-50 bg-slate-900/95 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl shadow-2xl lg:hidden w-64">
          <ul className="flex flex-col space-y-3 text-sm">
            <li>
              <Link
                to="/public-user"
                className="block px-4 py-2.5 rounded-xl bg-slate-800/80 text-slate-200 hover:bg-indigo-600 hover:text-white transition"
                onClick={() => setDropDown(false)}
              >
                <FontAwesomeIcon icon={faUser} className="mr-2 text-indigo-400" />
                Search Student
              </Link>
            </li>
            <li>
              <Link
                to="/log"
                className="block px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md transition"
                onClick={() => setDropDown(false)}
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Student Login
              </Link>
            </li>
            <li>
              <Link
                to="/log.a"
                className="block px-4 py-2.5 rounded-xl bg-red-950/50 border border-red-800/50 text-red-300 hover:bg-red-800 hover:text-white transition"
                onClick={() => setDropDown(false)}
              >
                <FontAwesomeIcon icon={faUserTie} className="mr-2 text-red-400" />
                Admin Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
