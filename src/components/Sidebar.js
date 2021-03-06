import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardImg } from 'reactstrap';
import { Loading } from './Loading';


const Sidebar = ({featured, jobsLoading, jobsFailed}) =>{
    
    const renderJobs = featured.map(job => {
        return(
            <Link to={`/search/${job.id}`} style={{ textDecoration: 'none' }} className="text-dark">
                <div className="col-8 col-sm-12 col-lg-8 col-xl-6 mx-auto d-flex justify-content-left">
                    <Card className="my-4 col-10 col-sm-12">
                        <CardImg top src={job.image} alt={job.company} />
                        <div className="bg-light p-2">
                            <CardTitle className="mt-1">{job.company}</CardTitle>
                            <CardText> {job.position} {job.pay}</CardText>
                        </div>
                    </Card>
                </div>
            </Link>
        );
    })

    if(jobsLoading){
        return (
            <Loading />
        )
    }
    if(jobsFailed){
        return(
            <h4>Failed to load</h4>
        )
    }
    
    return(
        <React.Fragment>
            <h2>Featured Jobs</h2>
            {renderJobs}
        </React.Fragment>
    )
}

export default Sidebar;