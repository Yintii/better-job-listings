import React from 'react';
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor }from './redux/configStore';
import './App.css';


const App = (props) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <div className="App">
              <Main />
            </div>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
}

export default App;
