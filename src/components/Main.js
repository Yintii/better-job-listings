import React from 'react';
import Search from './SearchComponent';
import Header from './HeaderComponent';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import JobDetails from './JobDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import { JOBS } from '../shared/Jobs';

const Main = () => {

    const RenderDetails = ({match}) => {
        return(
            <JobDetails 
                job={JOBS.filter(job => job.id === +match.params.jobId)[0]}
            />
        );
    }

    return(
        <React.Fragment>
            <Header />
            {/*This wrapper is for making sure the footer stays down */}
            <div className="wrapper"> 
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/search' render={() => <Search jobs={JOBS}/>} />
                    <Route exact path='/about' component={About} />
                    <Route path='/search/:jobId/details' component={RenderDetails} />
                    <Redirect to='/' />
                </Switch>
            </div>
            <Footer />
        </React.Fragment>
        );
}
export default Main;