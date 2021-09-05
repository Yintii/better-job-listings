import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

const JobDetails = ({job}) => {
    return(
        <div className="container">
            <div className="row">
                <h1>{job.company}</h1>
                <Link className="col m-1 btn btn-warning" to={`/search/${job.id}/apply`}>
                    Apply
                </Link>
                <Media src={job.image} alt={job.company}/>
                <p>{job.position} - {job.pay}</p>
                <p>{job.description}</p>
            </div>
        </div>
    )
}

export default JobDetails;