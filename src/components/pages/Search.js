import React, { Component } from 'react';
import { Input, Label} from 'reactstrap';
import JobListings from '../JobListingsComponent';
import { Loading } from '../Loading';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {userInput: null, jobs: this.props.jobs}
        this.handleChange = this.handleChange.bind(this);
    }

    truncate(str){
        return str.length > 180 ? str.substring(0,180) + '...' : str;
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
            <div className="container px-5">
                <div className="row mt-5">
                    <Label for="searchInput">Search:</Label>
                    <Input id="searchInput" type="text" value={this.state.userInput} onChange={this.handleChange} />
                    <JobListings jobs={filteredJobs}
                                 truncate={this.truncate}
                                 jobsLoading={this.props.jobsLoading}
                                 jobsErr={this.props.jobsErr}/>
                </div>
            </div>
        );
    }
}

export default Search;