import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Search from './components/SearchComponent';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

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

        <Search />
      </div>
    );
  }

}

export default App;
