import React from 'react';
import exampleImage from '../assets/cnss.png';


const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={exampleImage}
            alt="Logo"
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">FSE DataSet</h1>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </header>
  );
};

export default Header;