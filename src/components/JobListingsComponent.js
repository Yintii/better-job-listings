import React from 'react';
import { Button,
         Card, 
         CardTitle, 
         CardText, 
         CardBody, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                <React.Fragment>
                    {jobListings}
                </React.Fragment>
                )
        }else{
            return(<NoResults />)
        }
    }

    const jobListings = props.jobs.map(job => {
            return(
                <div key={job.id} className="my-3 col-sm-12 col-md-6 col-lg-4">
                    <Card className="container">
                        <CardBody className="row">
                            <CardTitle className="col-12">
                                <div className="row align-items-center mb-3">
                                    <Media className="col-6 col-sm-5 col-lg-4 order-2" src={job.image} alt={job.company} width="50" height="50" />
                                    <h4 className="col-6 col-sm-7 col-lg-8">{job.company}</h4>
                                </div>
                                <p>{job.position} - {job.pay}</p>
                                {job.featured === true &&
                                    <Featured />
                                }
                            </CardTitle>
                            <CardText className="col-12">
                                {props.truncate(job.description)}
                            </CardText>
                            <Link className="col m-1 btn btn-warning" to={`/search/${job.id}/apply`}>
                                Apply
                            </Link>
                            <Link className="col m-1 btn btn-primary" to={`/search/${job.id}`}>
                                Details
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        
        return(
            <div className="container">
                <div className="row d-flex align-items-center">
                    <ResultsDisplay />
                </div>
            </div>
        );
    }


export default JobListings;