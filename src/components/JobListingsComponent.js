import React from 'react';
import { Button,
         Card, 
         CardTitle, 
         CardText, 
         CardBody, Media } from 'reactstrap';

const JobListings = (props) => {
    const jobListings = props.jobs.map(job => {
            return(
                <div key={job.id} className="col-md-12 col-lg-6 my-1">
                    <Card className="container">
                        <CardBody className="row">
                            <CardTitle className="col-6">
                                <div className="row align-items-center mb-3">
                                    <h4 className="col-8">{job.company}</h4>
                                    <Media className="col-4" src={job.image} alt={job.company} width="50" height="50" />
                                </div>
                                
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