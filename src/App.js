import React from 'react';
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = (props) => {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
}

export default App;
