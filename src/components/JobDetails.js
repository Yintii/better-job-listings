import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import GoBackButton from './GoBackButton';

const JobDetails = ({job}) => {

    

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 col-lg-6 text-center my-5">
                    <h1>{job.company}</h1>
                    <Media src={job.image} alt={job.company} height="300"/>
                    <p>{job.position} - {job.pay}</p>
                </div>
                <div className="col-12 col-md-8 col-lg-6 p-5">
                    <p>{job.description}</p>
                    <div className="row">

                        <Link className="col btn btn-warning btn-lg m-1" to={`/search/${job.id}/apply`}>Apply</Link>

                        <GoBackButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails;