import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F17] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="h-8 w-8 text-white" />
            </div>
            <p className="text-gray-400">
              AI-powered marketing solutions for fitness brands.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/share/1ELzTJUGig/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/otabek-otanazarov-2b6678351"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-purple-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#process" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="text-gray-400 hover:text-purple-500 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <span>contact@oupagency.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lithuania</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 OUP Agency All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}