import React from "react";

export default ({ result }) => {
  console.log(result.picture)
  const { compensations, openTo } = result;

  const renderCompensation = (data) => {
    if(!data){
      return <div>Skills not mentioned!</div>
    }else{
      if(Object.keys(compensations).length === 0){
        return <div>Skills not mentioned!</div>
      }
      return <>
        {compensations.employee && (
            <div className="skill-card">
              <span>Full time and part time employment.</span>
              <span className="fw-bold font-x-small">
                Starting at {compensations.employee.currency} {compensations.employee.amount}/ {compensations.employee.periodicity}.
              </span>
            </div>
          )}
          {compensations.freelancer && (
            <div className="skill-card">
              <span>Freelancing.</span>
              <span className="fw-bold font-x-small">
                Starting at {compensations.freelancer.currency} {compensations.freelancer.amount}/ {compensations.freelancer.periodicity}
              </span>
            </div>
          )}
          {compensations.intern && (
            <div className="skill-card">
              <span>Internship.</span>
              <span className="fw-bold font-x-small">
                Starting at {compensations.intern.currency} {compensations.intern.amount}/ {compensations.intern.periodicity}
              </span>
            </div>
          )}
      </>
    }
  }
  return (
    <>
      <div className="people-card">
        <div className="people-card-image-section">
          <img className="people-card-image" src={result.picture ?? "https://torre-media.s3-us-west-2.amazonaws.com/subtorres/Gig/torre.png"} alt="profile-pic" />
          <h2>{result.name}</h2>
          <span>{result.professionalHeadline}</span>
          <p>
            {result.locationName} {result.remoter && "(open for Remote jobs)"}
          </p>
        </div>
        {/* <div className="people-card-about-section">
          <span>About:</span>
          <p>Co - Founder and CTA at XYZ, Full stack web developer, Entreprenuer and instructor.</p>
        </div> */}
        { openTo && openTo.length > 0 && (
          <div className="people-card-openTo-section">
            <span>Open for: </span>
            <div>
              {openTo.map((skill, i) => {
                return (
                  <p key={i + skill} className="pill">
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        )}
        <div className="people-card-contact-section">
          <span>Contact for:</span>
          {renderCompensation(compensations)}
        </div>
        <a href={`https://bio.torre.co/en/${result.username}`} target="_blank" className="btn-people fw-bold">
          More
        </a>
      </div>
    </>
  );
};
