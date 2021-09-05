import React from 'react';
import { Media } from 'reactstrap';

const JobDetails = ({job}) => {
    return(
        <div className="container">
            <div className="row">
                <h1>{job.company}</h1>
                <Media src={job.image} alt={job.company}/>
                <p>{job.position} - {job.pay}</p>
                <p>{job.description}</p>
            </div>
        </div>
    )
}

export default JobDetails;