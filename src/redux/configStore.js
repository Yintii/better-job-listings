import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Jobs } from './jobs';
import { Users } from './users';
import { BlogPosts } from './blogposts';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            jobs: Jobs,
            users: Users,
            blogPosts: BlogPosts
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};