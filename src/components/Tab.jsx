import React from 'react';

const Tabs = ({ activeTab, handleTabClick }) => {
  return (
    <div className="flex space-x-4 border-b mb-6">
      {['medical', 'analyse', 'clinique'].map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`py-2 px-4 capitalize ${
            activeTab === tab
              ? 'border-b-2 border-teal-500 font-bold text-teal-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;