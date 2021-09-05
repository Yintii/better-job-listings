import React from 'react';
import Search from './SearchComponent';
import Header from './HeaderComponent';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import JobDetails from './JobDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import { JOBS } from '../shared/Jobs';
import Apply from './Apply';

const Main = () => {

    function getMatch(match){
        return JOBS.filter(job => job.id === +match.params.jobId)[0];
    }

    const JobDetailsPage = ({match}) => {
        return(
            <JobDetails 
                job={getMatch(match)}
            />
        );
    }

    const ApplyJobPage = ({match}) => {
        return(
            <Apply 
                job={getMatch(match)}
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
                    <Route exact path='/search/:jobId' component={JobDetailsPage} />
                    <Route path='/search/:jobId/apply' component={ApplyJobPage} />
                    <Redirect to='/' />
                </Switch>
            </div>
            <Footer />
        </React.Fragment>
        );
}
export default Main;