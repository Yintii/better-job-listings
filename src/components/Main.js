import React from 'react';
import Search from './SearchComponent';
import Header from './HeaderComponent';
import Home from './Home';
import About from './About';
import Sidebar from './Sidebar'
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = () => {
    return(
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/about' component={About} />
                <Redirect to='/' />
            </Switch>
        </React.Fragment>
        );
}
export default Main;