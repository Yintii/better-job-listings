import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardTitle } from 'reactstrap';

class JobListings extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render(){
        const jobListings = this.props.jobs.map(job => {
            return(
                <div key={job.id} className="col m-1">
                    <Card>
                        <CardBody>
                            <CardHeader dark className="bg-dark text-white">
                                {job.company}
                            </CardHeader>
                            <CardText>
                                {job.position}
                                <br/>
                                {job.pay}
                            </CardText>
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
}

export default JobListings;