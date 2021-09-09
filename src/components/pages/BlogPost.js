import React from 'react';

const BlogPost = ({post}) =>{
    return(
        <div className="container bg-dark text-white my-5 p-5">
            <div className="row">
                <div className="col-12 p-5">
                    <h1>{post.title}</h1>
                    <p className="pb-2">{post.author}</p>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;