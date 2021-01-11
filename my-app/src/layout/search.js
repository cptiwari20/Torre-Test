import React from 'react';

export default ({children}) => {
    return <div className="section-container-center">
      {/* Section Search */}
      <div className="section-search">
        {children}
      </div>
    </div>   
}