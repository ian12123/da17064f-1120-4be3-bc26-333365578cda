
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 px-4 py-3 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/" className="flex items-center space-x-2">
            <span>作品集</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`text-white transition-all hover:text-primary-foreground ${
              location.pathname === '/' ? 'border-b-2 border-white' : ''
            }`}
          >
            關於我
          </Link>
          <Link 
            to="/3d-models" 
            className={`text-white transition-all hover:text-primary-foreground ${
              location.pathname === '/3d-models' ? 'border-b-2 border-white' : ''
            }`}
          >
            3D模型製作
          </Link>
          <Link 
            to="/logo-design" 
            className={`text-white transition-all hover:text-primary-foreground ${
              location.pathname === '/logo-design' ? 'border-b-2 border-white' : ''
            }`}
          >
            LOGO設計
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/90 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link 
            to="/" 
            className="text-white text-2xl font-medium"
            onClick={toggleMenu}
          >
            關於我
          </Link>
          <Link 
            to="/3d-models" 
            className="text-white text-2xl font-medium"
            onClick={toggleMenu}
          >
            3D模型製作
          </Link>
          <Link 
            to="/logo-design" 
            className="text-white text-2xl font-medium"
            onClick={toggleMenu}
          >
            LOGO設計
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
