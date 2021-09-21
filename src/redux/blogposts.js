import { BLOGPOSTS } from '../shared/BlogPosts';

export const BlogPosts = (state = BLOGPOSTS, action) => {
    switch (action.type){
        default:
            return state;
    }
}