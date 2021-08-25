import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { JOBS } from '../shared/Jobs';
import JobListings from './JobListingsComponent';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {userInput: null, jobs: JOBS}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({userInput: event.target.value});
    }

    render(){
        const filteredJobs = this.state.jobs.filter(job => {
            if (this.state.userInput == "" || this.state.userInput == null){
                return job;
            }else{
                return job.position.toLowerCase().includes(this.state.userInput.toLowerCase());
            }
        });
        return(
            <div>
                
                <input type="text" value={this.state.userInput} onChange={this.handleChange} />
                <JobListings jobs={filteredJobs}/> 
                Search: {this.state.userInput}
            </div>
        );
    }
}

export default Search;