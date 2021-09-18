import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const Posts = (data) =>{
    const posts = data.map(post =>{
        return(
            <div className="col-12 col-md-6 py-3 mx-auto">
                <Card className="px-3">
                    <CardBody>
                        <Link className="blog-link" to={`/blog/${post.id}`}><h1>{post.title}</h1></Link>
                        <span className="text-muted underlined">By {post.author}</span>
                        <p>{post.body}</p>
                    </CardBody>
                </Card>
            </div>
        );
    });
    return(posts);
}

const Blog = (props) =>{
    return(
        <div className="container">
            <div className="row py-5">
                <h1 className="text-center">JobSurching Journey</h1>
                <hr />
                    {Posts(props.posts)}
            </div>
        </div>
    );
};



export default Blog;