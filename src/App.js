import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import JobListings from './components/JobListingsComponent';
import { JOBS } from './shared/Jobs';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: JOBS
    };
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">JobSearcher</NavbarBrand>
          </div>
        </Navbar>
        <JobListings jobs={this.state.jobs}/>
      </div>
    );
  }

}

export default App;
