import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../context/Theme';
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Task Manager</Link>
        <div className="flex items-center">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/tasks" className="mr-4">Tasks</Link>
          <Link to="/api-data" className="mr-4">API Data</Link>
          <Button onClick={toggleTheme} variant="secondary" size="sm">
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
