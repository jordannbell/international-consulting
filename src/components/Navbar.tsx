import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Globe2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Globe2 className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                International Consulting
              </span>
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300'
                  } hover:text-primary-500 dark:hover:text-primary-300 px-3 py-2 text-sm font-medium transition-colors duration-200`
                }
              >
                Accueil
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300'
                  } hover:text-primary-500 dark:hover:text-primary-300 px-3 py-2 text-sm font-medium transition-colors duration-200`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300'
                  } hover:text-primary-500 dark:hover:text-primary-300 px-3 py-2 text-sm font-medium transition-colors duration-200`
                }
              >
                À Propos
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300'
                  } hover:text-primary-500 dark:hover:text-primary-300 px-3 py-2 text-sm font-medium transition-colors duration-200`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300'
                  } hover:text-primary-500 dark:hover:text-primary-300 px-3 py-2 text-sm font-medium transition-colors duration-200`
                }
              >
                Contact
              </NavLink>
            </nav>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Changer le thème"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;