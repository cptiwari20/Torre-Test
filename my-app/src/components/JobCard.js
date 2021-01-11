import React from 'react';

export default ({result}) => {
    return <>
        <div class="job-card">
              <div class="job-card-top">
                <div class="job-logo"></div>
                <div class="job-details">
                  <div class="job-details-main">
                    <h3>{result.objective}</h3>
                    <span>{result.type}</span>
                    <span>Torre Labs</span>
                    <span class="fw-bold">USD $50k - $80k / year</span>
                  </div>
                  <div class="job-details-extra">
                    <div class="mini-card">
                      <span class="pill-top"></span>
                      <div class="span">Requirements:</div>
                      <span class="pill">php</span>
                      <span class="pill">node.js</span>
                      <span class="pill">react</span>
                      <span class="pill">aws</span>
                    </div>

                    <div class="mini-card">
                      <span class="pill-top"></span>
                      <div class="span">Team Members:</div>
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" class="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" class="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" class="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" class="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" class="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" class="team-member" />
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="team-member" class="team-member" />
                    </div>

                    <div class="mini-card">
                      <span class="pill-top"></span>
                      <div class="span">Latest Questions:</div>
                      <span class="question">I have updated my Genoma, is this updated in yours?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="job-card-bottom">
                <div class="job-cta">
                  <div class="job-cta-left">
                    <span class="time fw-bold">28 days, 9 hours, 2 mins left.</span>
                    <button class="btn-cta">Quick Apply</button>
                    <button class="btn-cta">Ask question</button>
                    <button class="btn-cta">Refer Someone</button>
                  </div>
                  <div class="job-cta-right">
                    <button class="btn-cta btn-cta-main fw-bold">View</button>
                  </div>
                </div>
              </div>
            </div>
    </>
}