import React from 'react';

export default ({result}) => {
    return <>
        <div className="people-card">
        <div className="people-card-image-section">
          <img src={result.picture ?? "https://torre-media.s3-us-west-2.amazonaws.com/subtorres/Gig/torre.png"} alt="profile-pic" />
          <h2>{result.name}</h2>
          <span>{result.professionalHeadline}</span>
        </div>
        <div className="people-card-about-section">
          <span>About:</span>
          <p>Co - Founder and CTA at XYZ, Full stack web developer, Entreprenuer and instructor.</p>
        </div>
        <div className="people-card-contact-section">
          <span>Contact for:</span>
          <div className="skill-card">
            <span>Full time and part time employment.</span>
            <span className="fw-bold font-x-small">Starting at 15$ / hour.</span>
          </div>
          <div className="skill-card">
            <span>Advisory Services.</span>
            <span className="fw-bold font-x-small">Starting at 10$ / hour.</span>
          </div>
        </div>
        <button className="btn-people fw-bold">More</button>
      </div>
      </>
}