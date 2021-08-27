import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
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
            if (this.state.userInput === "" || this.state.userInput === null){
                return job;
            }else{
                if(job.position.toLowerCase().includes(this.state.userInput.toLowerCase()) || job.company.toLowerCase().includes(this.state.userInput.toLowerCase())){
                    return job;
                }else{
                    return null;
                } 
            }
        });
        return(
            <div className="container">
                <div className="row px-5">
                    <Label className="mt-5" for="searchInput">Search:</Label>
                    <Input className="mb-5" id="searchInput" type="text" value={this.state.userInput} onChange={this.handleChange} />
                    <JobListings jobs={filteredJobs}/> 
                </div>
            </div>
        );
    }
}

export default Search;