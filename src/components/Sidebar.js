import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardImg } from 'reactstrap';


const Sidebar = (props) =>{
    
    const renderJobs = props.featured.map(job => {
        return(
            <Link to={`/search/${job.id}/details`} style={{ textDecoration: 'none' }} className="text-dark">
                <Card className="my-4">
                    <CardImg top src={job.image} alt={job.company} height="100" />
                    <div className="bg-light p-2">
                        <CardTitle className="mt-1">{job.company}</CardTitle>
                        <CardText> {job.position} {job.pay}</CardText>
                    </div>
                </Card>
            </Link>
        );
    })

    
    return(
        <React.Fragment>
            <h2>Featured Jobs</h2>
            {renderJobs}
        </React.Fragment>
    )
}

export default Sidebar;