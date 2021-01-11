import React from 'react';
import JobCard from './JobCard';
import ProfileCard from './ProfileCard';

export default ({results, type}) => {
    return <>
        <div className="section-container-right">
            <div className="section-job-listing-container">
                <h2 className="fw-bold color-grey">
                    { type === 'people' ? 'People Available' : 'Jobs available:' } 
                </h2>
                    { type === 'people' ?
                    results.length && results.map((result, i) => {
                        return <div key={i} className="section-people">
                            <ProfileCard  result={result} /> 
                        </div>
                    }) : results.length && results.map((result, i) => {
                        return <div className="section-job-listing " key={i}> <JobCard  result={result} /></div>
                    })}
            </div>
        </div>
    </>
}