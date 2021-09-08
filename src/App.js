import React from 'react';
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configStore';
import './App.css';

const store = ConfigureStore();

const App = (props) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
}

export default App;
