import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar';


const Home = (props) => {
    return(
        <React.Fragment>
            <Jumbotron className="container-fluid p-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="py-5 display-1">Let's find your dream job</h1>
                        <div className="row d-flex justify-content-center">
                            <div className="col-4 d-flex justify-content-center">
                                <Link className="btn btn-primary" to="/account/register">Sign up</Link>
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <Link className="btn btn-secondary" to="/account/login">Sign in</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Jumbotron>

            <div className="container" >
                <div className="row">
                    <div class="col-md-8">
                        <Jumbotron className="m-5">
                            <h3 className="display-3">JobSurcher</h3>
                            <hr />
                            <p className="lead">We're like all the other guys, but even better. We work
                                to be the top of our class, but don't take our word for it.
                                Read for yourself on how our system and process works for yourself.
                            </p>
                            <Link className="text-white btn btn-dark" to="/about">Learn More</Link>
                            
                        </Jumbotron>
                    </div>
                    <div class="mt-5 col-12 col-md-4 px-5">
                        <Sidebar featured={props.jobs.filter(job => job.featured === true)}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;