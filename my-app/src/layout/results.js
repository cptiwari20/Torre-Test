import React from 'react';

export default ({result}) => {
    return <>
        <div className="job-card">
              <div className="job-card-top">
                <div className="job-logo"></div>
                <div className="job-details">
                  <div className="job-details-main">
                    <h3>Software developers for startup backed by early SpaceX and Facebook investors.</h3>
                    <span>Fullstack Development - Remote</span>
                    <span>Torre Labs</span>
                    <span className="fw-bold">USD $50k - $80k / year</span>
                  </div>
                  <div className="job-details-extra">
                    <div className="mini-card">
                      <span className="pill-top"></span>
                      <div className="span">Requirements:</div>
                      <span className="pill">php</span>
                      <span className="pill">node.js</span>
                      <span className="pill">react</span>
                      <span className="pill">aws</span>
                    </div>

                    <div className="mini-card">
                      <span className="pill-top"></span>
                      <div className="span">Team Members:</div>
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" className="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" className="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" className="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" className="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" className="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" className="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" className="team-member" />
                    </div>

                    <div className="mini-card">
                      <span className="pill-top"></span>
                      <div className="span">Latest Questions:</div>
                      <span className="question">I have updated my Genoma, is this updated in yours?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-card-bottom">
                <div className="job-cta">
                  <div className="job-cta-left">
                    <span className="time fw-bold">28 days, 9 hours, 2 mins left.</span>
                    <button className="btn-cta">Quick Apply</button>
                    <button className="btn-cta">Ask question</button>
                    <button className="btn-cta">Refer Someone</button>
                  </div>
                  <div className="job-cta-right">
                    <button className="btn-cta btn-cta-main fw-bold">View</button>
                  </div>
                </div>
              </div>
            </div>
    </>
}