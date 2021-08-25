import React, { Component } from 'react';
import { Input } from 'reactstrap';
import Filter from './FilterComponent';
import { JOBS } from '../shared/Jobs';

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
        const filteredJobs = this.state.jobs.filter(job => job.position.includes(this.state.userInput));
        return(
            <div>
                
                <input type="text" value={this.state.userInput} onChange={this.handleChange} />
                <Filter jobs={filteredJobs}/> 
                Search: {this.state.userInput}
            </div>
        );
    }
}

export default Search;