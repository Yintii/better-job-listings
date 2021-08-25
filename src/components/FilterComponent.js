import React, { Component } from 'react';

import JobListings from './JobListingsComponent';

class Filter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <JobListings listings={this.props.jobs} />
        );
    }
}

export default Filter;