import React, { Component } from 'react';
import Search from './SearchComponent';
import Header from './HeaderComponent';
import Home from './Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/search" component={Search} />
                    <Redirect to="/" />
                </Switch>
            </div>
            );
    }
}
export default Main;