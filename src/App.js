import React from 'react';
import Search from './components/SearchComponent';
import Header from './components/HeaderComponent';

import './App.css';

const App = (props) => {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );


}

export default App;
