import React from 'react';
import { Media } from 'reactstrap';

const About = () => {
    return(
        <div className="container">
            <div className="row">
                <h1 className="pt-5">About us</h1>
                <hr />
                <div className="col-6">
                    <Media width="100%" height="100%" className="rounded bg-light" src='/assets/applelogo.png'/>
                </div>
                <div className="col-6">
                    <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ligula ut porttitor fringilla. Praesent bibendum nisi non porta gravida. Curabitur placerat, est quis dignissim condimentum, leo est dapibus leo, eget ullamcorper justo urna eu arcu. Duis rutrum sapien in magna vestibulum molestie. Fusce condimentum porta metus nec lobortis. Duis elementum vestibulum tortor eget euismod. Etiam tortor diam, eleifend vel bibendum sed, pretium eu nisi. Aenean sagittis varius nisl quis aliquet. Etiam metus nisl, aliquam non nibh ut, ultrices tincidunt massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacus velit, egestas sed semper a, lobortis vitae metus. Suspendisse sagittis arcu urna, id rhoncus velit laoreet non. Ut malesuada est ligula, eu mollis justo rhoncus eget. Duis et purus suscipit, porta nisl sed, venenatis dui. Ut nisi ante, sagittis eu lacinia nec, consequat quis diam
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 order-2">
                    <Media width="100%" height="100%" className="rounded bg-light" src='/assets/googl.png' />
                </div>
                <div className="col-6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ligula ut porttitor fringilla. Praesent bibendum nisi non porta gravida. Curabitur placerat, est quis dignissim condimentum, leo est dapibus leo, eget ullamcorper justo urna eu arcu. Duis rutrum sapien in magna vestibulum molestie. Fusce condimentum porta metus nec lobortis. Duis elementum vestibulum tortor eget euismod. Etiam tortor diam, eleifend vel bibendum sed, pretium eu nisi. Aenean sagittis varius nisl quis aliquet. Etiam metus nisl, aliquam non nibh ut, ultrices tincidunt massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacus velit, egestas sed semper a, lobortis vitae metus. Suspendisse sagittis arcu urna, id rhoncus velit laoreet non. Ut malesuada est ligula, eu mollis justo rhoncus eget. Duis et purus suscipit, porta nisl sed, venenatis dui. Ut nisi ante, sagittis eu lacinia nec, consequat quis diam
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;