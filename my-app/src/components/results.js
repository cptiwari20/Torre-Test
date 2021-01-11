import React from 'react';
import JobCard from './JobCard';

export default ({results}) => {
    return <>
        <div className="section-container-right">
            <div className="section-job-listing-container">
                {results.length && results.map(result => {
                   return <JobCard result={result} />
                })}
            </div>
        </div>
    </>
}