import React from 'react';
import { Button,
         Card, 
         CardTitle, 
         CardText, 
         CardBody, Media } from 'reactstrap';

const JobListings = (props) => {

    const Featured = () => {
        return (
            <Button color="outline-success" size="sm">
                Featured
            </Button>
            );
    }

    const NoResults = () => {
        return(
            <Card className="p-5 my-5">
                <CardTitle>
                    <h1> No jobs :(</h1>
                </CardTitle>
                <CardText>
                    <p>Try making your search more general for more results.</p>
                </CardText>
            </Card>
        );
    }

    const ResultsDisplay = () =>{
        if(jobListings.length > 0){
            return(
                <div className="my-5">
                    {jobListings}
                </div>
                )
        }else{
            return(<NoResults />)
        }
    }

    const jobListings = props.jobs.map(job => {
            return(
                <div key={job.id} className="col-md-12 col-lg-6 my-2">
                    <Card className="container">
                        <CardBody className="row">
                            <CardTitle className="col-6">
                                <div className="row align-items-center mb-3">
                                    <Media className="col-md-4" src={job.image} alt={job.company} width="50" height="50" />
                                    <h4 className="col-md-8 col-sm-12">{job.company}</h4>
                                </div>
                                <p>{job.position} - {job.pay}</p>
                                {job.featured === true &&
                                    <Featured />
                                }
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
                    <ResultsDisplay />
                </div>
            </div>
        );
    }


export default JobListings;