import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserCircle, LogOut, Home, Settings } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'bg-indigo-700' : 'hover:bg-indigo-700';
  };

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/private" className="flex items-center space-x-2">
              <span className="text-white font-bold text-xl">Dashboard</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/private" 
                className={`text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${isActive('/private')}`}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              
              <Link 
                to="/profile" 
                className={`text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${isActive('/profile')}`}
              >
                <UserCircle size={18} />
                <span>Profile</span>
              </Link>
              
              <Link 
                to="/settings" 
                className={`text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${isActive('/settings')}`}
              >
                <Settings size={18} />
                <span>Settings</span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;