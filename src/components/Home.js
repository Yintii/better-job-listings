import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import { JOBS } from '../shared/Jobs';
 
const Home = () => {
    return(
        <div className="container" >
            <div className="row">
                <div class="col-md-8">
                    <Jumbotron className="m-5">
                        <h1 className="display-3">JobSurcher</h1>
                        <hr />
                        <p className="lead">We're like all the other guys, but even better. We work
                            to be the top of our class, but don't take our word for it.
                            Read for yourself on how our system and process works for yourself.
                        </p>
                        <Button>
                            <Link className="text-white" style={{textDecoration: 'none'}} to="/about">Learn More</Link>
                        </Button>
                    </Jumbotron>
                </div>
                <div class="col-md-4 mt-5">
                    <Sidebar featured={JOBS.filter(job => job.featured === true)}/>
                </div>
            </div>
        </div>
    );
}
export default Home;