import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import persistantReducer from './rootReducer';

const middlewares = [thunk, logger]

export const store = createStore(
        persistantReducer,
        applyMiddleware(...middlewares)
    );

export const persistor = persistStore(store);
