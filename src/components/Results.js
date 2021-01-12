import React from "react";
import JobCard from "./JobCard";
import ProfileCard from "./ProfileCard";

export default ({ results, type }) => {
  return (
    <>
      <div className="section-container-right">
        <h2 className="fw-bold color-grey">{type === "people" ? "People Available" : "Jobs available:"}</h2>
        <div className="section-job-listing-container">
           { type === "people" &&  results.map((result, i) => {
                return (
                  <div key={i} className="section-people">
                    <ProfileCard result={result} />
                  </div>
                );
              }) }
          
            { type === "opportunities" && results.map((result, i) => {
              return (
                <div key={i} className="section-job-listing " key={i}>
                  {" "}
                  <JobCard result={result} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
