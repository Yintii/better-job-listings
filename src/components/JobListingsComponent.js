import React, { useState } from 'react';
import { Button, Card, CardTitle, CardText, CardBody, UncontrolledCollapse } from 'reactstrap';

const JobListings = (props) => {
    const jobListings = props.jobs.map(job => {
            return(
                <div key={job.id} className="col-md-12 col-lg-4 my-1">
                    <Card>
                        <CardBody>
                            <CardTitle className="bg-dark text-white">
                                {job.company}
                            </CardTitle>
                            <CardText>
                                {job.position}
                                <br/>
                                {job.pay}
                            </CardText>
                            <Button color="primary" id={`toggler-${job.id}`}>Details</Button>
                            <UncontrolledCollapse toggler={`#toggler-${job.id}`} className="m-5">
                                {job.description}
                            </UncontrolledCollapse>
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
            </div>
        );
    }


export default JobListings;