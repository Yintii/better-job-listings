import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import JobDetails from './JobDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Apply from './Apply';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return{
        jobs: state.jobs,
        user: state.user
    }
}


const Main = (props) => {

    function getMatch(match){
        return props.jobs.filter(job => job.id === +match.params.jobId)[0];
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
                    <Route exact path='/search' render={() => <Search jobs={props.jobs}/>} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/account/login' render={ () => <SignIn user={props.user}/>} />
                    <Route exact path='/account/register' render={ () => <SignUp user = {props.user}/>} />
                    <Route exact path='/search/:jobId' component={JobDetailsPage} />
                    <Route path='/search/:jobId/apply' component={ApplyJobPage} />
                    <Redirect to='/' />
                </Switch>
            </div>
            <Footer />
        </React.Fragment>
        );
}
export default withRouter(connect(mapStateToProps)(Main));