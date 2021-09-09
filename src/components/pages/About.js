import React from 'react';
import { Media } from 'reactstrap';
import { Accordion } from 'react-bootstrap'

const About = () => {
    return(
        <React.Fragment>
            <div className="container">
                <h1 className="pt-5">About us</h1>
                <hr />
                <div className="row my-5">
                    <div className="col-6">
                        <Media width="100%" height="100%" className="rounded bg-light" src='/assets/whiteGuy.jpg'/>
                    </div>
                    <div className="col-6">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ligula ut porttitor fringilla. Praesent bibendum nisi non porta gravida. Curabitur placerat, est quis dignissim condimentum, leo est dapibus leo, eget ullamcorper justo urna eu arcu. Duis rutrum sapien in magna vestibulum molestie. Fusce condimentum porta metus nec lobortis. Duis elementum vestibulum tortor eget euismod. Etiam tortor diam, eleifend vel bibendum sed, pretium eu nisi. Aenean sagittis varius nisl quis aliquet. Etiam metus nisl, aliquam non nibh ut, ultrices tincidunt massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacus velit, egestas sed semper a, lobortis vitae metus. Suspendisse sagittis arcu urna, id rhoncus velit laoreet non. Ut malesuada est ligula, eu mollis justo rhoncus eget. Duis et purus suscipit, porta nisl sed, venenatis dui. Ut nisi ante, sagittis eu lacinia nec, consequat quis diam
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 order-2">
                        <Media width="100%" height="100%" className="rounded bg-light" src='/assets/download.jpg' />
                    </div>
                    <div className="col-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ligula ut porttitor fringilla. Praesent bibendum nisi non porta gravida. Curabitur placerat, est quis dignissim condimentum, leo est dapibus leo, eget ullamcorper justo urna eu arcu. Duis rutrum sapien in magna vestibulum molestie. Fusce condimentum porta metus nec lobortis. Duis elementum vestibulum tortor eget euismod. Etiam tortor diam, eleifend vel bibendum sed, pretium eu nisi. Aenean sagittis varius nisl quis aliquet. Etiam metus nisl, aliquam non nibh ut, ultrices tincidunt massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacus velit, egestas sed semper a, lobortis vitae metus. Suspendisse sagittis arcu urna, id rhoncus velit laoreet non. Ut malesuada est ligula, eu mollis justo rhoncus eget. Duis et purus suscipit, porta nisl sed, venenatis dui. Ut nisi ante, sagittis eu lacinia nec, consequat quis diam
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2 className="text-center">FAQ</h2>
                <div className="row">
                    <div className="col-12">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    What was the inspiration for this project?
                                </Accordion.Header>
                                <Accordion.Body className="d-flex justify-content-center">
                                    <Media width="300" src="/assets/mrkrabs.jpg"/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    What will you be making in the future?
                                </Accordion.Header>
                                <Accordion.Body className="d-flex justify-content-center">
                                    <Media width="300" src="/assets/mrkrabs.jpg" />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    How do I sign up on the website?
                                </Accordion.Header>
                                <Accordion.Body className="d-flex justify-content-center">
                                    <Accordion.Body>
                                        Where it says, SIGN UP, believe it or not
                                    </Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    Where do babies come from?
                                </Accordion.Header>
                                <Accordion.Body className="d-flex justify-content-center">
                                    <Accordion.Body>
                                        Ya mama
                                    </Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default About;