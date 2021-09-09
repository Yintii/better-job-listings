import { JOBS } from '../shared/Jobs';
import { user } from '../shared/User';
import { BlogPosts } from '../shared/BlogPosts';

export const initialState = {
    jobs: JOBS,
    user: user,
    blogPosts: BlogPosts
}

export const Reducer = (state = initialState, action) => {
    return state;
}