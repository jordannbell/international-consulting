import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Globe2 className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                International Consulting
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300">
              Expertise et accompagnement pour votre croissance internationale
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-300"
                >
                  Conseil Stratégique
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-300"
                >
                  Transformation Digitale
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-300"
                >
                  Étude de Marché
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Entreprise
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-300"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Mail className="h-5 w-5" />
                <span>contact@intconsulting.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5" />
                <span>+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>123 Avenue des Affaires<br />75008 Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} International Consulting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;