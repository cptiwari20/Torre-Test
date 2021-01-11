import React from 'react';

export default ({children}) => {
    return <div className="section-container-right">
        <div className="section-job-listing-container">
            {children}
        </div>
    </div>
}