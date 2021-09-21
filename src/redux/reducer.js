import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Jobs } from './jobs';
import { Users } from './users';
import { BlogPosts } from './blogposts';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['jobs', 'blogPosts']
}

const rootReducer = combineReducers({
    jobs: Jobs,
    users: Users,
    blogPosts: BlogPosts
});

const persistantReducer = persistReducer(persistConfig, rootReducer);

export default persistantReducer;