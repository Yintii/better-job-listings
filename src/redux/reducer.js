import { JOBS } from '../shared/Jobs';
import { user } from '../shared/User';
import { BlogPosts } from '../shared/BlogPosts';
import { LOG_IN, LOG_OUT } from '../actions';

export const initialState = {
    jobs: JOBS,
    user: user,
    blogPosts: BlogPosts,
    loggedIn: false
}

export const Reducer = (state = initialState, action) => {

    switch(action.type){
        case LOG_IN:
            console.log(``)
            return {
                jobs: JOBS,
                user: user,
                blogPosts: BlogPosts,
                loggedIn: true
            }
        case LOG_OUT:
            return {
                jobs: JOBS,
                user: user,
                blogPosts: BlogPosts,
                loggedIn: false
            }
        default:
            return state;
    }
}