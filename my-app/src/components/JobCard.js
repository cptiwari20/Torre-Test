import React from 'react';
import moment from 'moment';

export default ({ result }) => {

  const torreImg = 'https://torre-media.s3-us-west-2.amazonaws.com/subtorres/Gig/torre.png'

  const renderCompensation = (data) => {
    if (data) {
      return `${data.currency} ${data.minAmount} - ${data.maxAmount} / ${data.periodicity}`
    }
    return '';
  }
  const renderOrganisationImage = (organizations) => {
    if (organizations) {
      if (organizations.length) {
        return result.organizations[0].picture
      } else {
        return torreImg
      }
    }
    return torreImg
  }

  const renderDates = (deadline) => {
    if(deadline){
      // const deadlineMoment = moment(deadline);
      const fromNow = moment(deadline).fromNow();
      // const deadlineMomentHours = deadlineMoment.diff(moment(), 'hours');
      return 'Expires ' + fromNow;
      // return `${deadlineMoment.diff(moment(), 'days')} days, ${deadlineMomentHours} hours, 2 mins left. ${fromNow}`
    }
    return 'No deadline'
  }

  return <>
    <div className="job-card">
      <div className="job-card-top">
        <div>
          <img className="job-logo" src={renderOrganisationImage(result.organizations)} />
        </div>
        <div className="job-details">
          <div className="job-details-main">
            <h3>{result.objective}</h3>
            <span>{result.type}</span>
            <span>{result.organizations && result.organizations.length && result.organizations[0].name}</span>
            <span className="fw-bold">
              {result.compensation && result.compensation.visible && renderCompensation(result.compensation.data)}
            </span>
          </div>
          <div className="job-details-extra">
            <div className="mini-card">
              <span className="pill-top"></span>
              <div className="span">Requirements:</div>
              {result.skills.length && result.skills.map((skill, i) => {
                return <span key={i + skill.name} className="pill">{skill.name}</span>
              })}
            </div>

            <div className="mini-card">
              <span className="pill-top"></span>
              <div className="span">Team Members:</div>
              {result.members.length && result.members.map((member, i) => {
                return <a href={`https://bio.torre.co/en/${member.username}`} target="_blank">
                  <img src={member.picture ?? 'https://torre-media.s3-us-west-2.amazonaws.com/subtorres/Gig/torre.png'} alt="team-member" className="team-member" />
                </a>
              })}
            </div>

            <div className="mini-card">
              <span className="pill-top"></span>
              <div className="span">Latest Questions:</div>
              <span className="question">
                {result.questions ? result.questions.length ? result.questions[0].text : 'No question found!' : 'No question found!'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="job-card-bottom">
        <div className="job-cta">
          <div className="job-cta-left">
            <span className="time fw-bold">
              {result.deadline && renderDates(result.deadline)}
              </span>
            <button className="btn-cta">Quick Apply</button>
            <button className="btn-cta">Ask question</button>
            <button className="btn-cta">Refer Someone</button>
          </div>
          <div className="job-cta-right">
            <a href={`https://torre.co/jobs/${result.id}`}
              target="_blank" className="btn-cta btn-cta-main fw-bold">
              View
                      </a>
          </div>
        </div>
      </div>
    </div>
  </>
}