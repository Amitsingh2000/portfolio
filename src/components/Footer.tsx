import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Amit Pardeshi</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Amit Pardeshi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;