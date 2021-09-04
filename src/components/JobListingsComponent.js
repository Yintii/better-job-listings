import React from 'react';
import { Button,
         Card, 
         CardTitle, 
         CardText, 
         CardBody } from 'reactstrap';

const JobListings = (props) => {
    const jobListings = props.jobs.map(job => {
            return(
                <div key={job.id} className="col-md-12 col-lg-6 my-1">
                    <Card className="container">
                        <CardBody className="row">
                            <CardTitle className="col-6">
                                <h3>{job.company}</h3>
                                <p>{job.position} - {job.pay}</p>
                            </CardTitle>
                            <CardText className="col-6">
                                {props.truncate(job.description)}
                            </CardText>
                            <Button className="col m-1" color="warning">Apply</Button>
                            <Button className="col m-1" color="primary">More details</Button>
                            
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {jobListings}
                </div>
                <div className="row job-details">
                    
                </div>
            </div>
        );
    }


export default JobListings;