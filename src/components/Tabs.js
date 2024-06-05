import React from 'react';

function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="tabs">
      <button onClick={() => onTabChange('active')} className={activeTab === 'active' ? 'active' : ''}>
        Active Sale Orders
      </button>
      <button onClick={() => onTabChange('completed')} className={activeTab === 'completed' ? 'active' : ''}>
        Completed Sale Orders
      </button>
    </div>
  );
}

export default Tabs;
