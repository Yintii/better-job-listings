import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Search from './pages/Search';
import AccountPage from './pages/AccountPage';
import JobDetails from './JobDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Apply from './Apply';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return{
        jobs: state.jobs,
        user: state.user,
        blogPosts: state.blogPosts
    }
}


const Main = (props) => {

    function getMatchingJob(match){
        return props.jobs.filter(job => job.id === +match.params.jobId)[0];
    }

    function getMatchingBlogPost(match) {
        return props.blogPosts.filter(post => post.id === +match.params.postId)[0];
    }

    const BlogPostPage = ({match}) => {
        return(
            <BlogPost 
                post={getMatchingBlogPost(match)}
            />
        );
    }

    const JobDetailsPage = ({match}) => {
        return(
            <JobDetails 
                job={getMatchingJob(match)}
            />
        );
    }

    const ApplyJobPage = ({match}) => {
        return(
            <Apply 
                job={getMatchingJob(match)}
            />
        );
    }

    return(
        <React.Fragment>
            <Header />
            {/*This wrapper is for making sure the footer stays down */}
            <div className="wrapper"> 
                <Switch>
                    <Route exact path='/'                    render    = {()=><Home jobs={props.jobs} 
                                                                                    user={props.user} 
                                                                                    posts={props.blogPosts}
                                                                              />}/>
                    <Route exact path='/about'               component = {About}/>
                    <Route exact path='/blog'                render    = {()=><Blog posts={props.blogPosts}/>}/>
                    <Route exact path='/blog/:postId'        component = {BlogPostPage}/>
                    <Route exact path='/account/login'       render    = {()=><SignIn user={props.user}/>}/>
                    <Route exact path='/account/register'    render    = {()=><SignUp user={props.user}/>}/>
                    <Route exact path='/search'              render    = {()=><Search jobs={props.jobs}/>}/>
                    <Route exact path='/search/:jobId'       component = {JobDetailsPage} />
                    <Route       path='/search/:jobId/apply' component = {ApplyJobPage} />
                    <Route exact path='/account'             render    = {()=> <AccountPage user={props.user}/>}/>
                    <Redirect to='/' />
                </Switch>
            </div>
            <Footer />
        </React.Fragment>
        );
}
export default withRouter(connect(mapStateToProps)(Main));