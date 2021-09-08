import React from 'react';
import {
    Button, Card, CardBody, CardHeader,
    Label, Col, Row
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


const SignUp = (props) => {

    const required = val => val && val.length;
    const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



    const handleSubmit = (values) => {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }



    return (
        <div className="container">
            <div className="row d-flex justify-content-center py-5">
                <div className="col-12 col-md-10 px-5">
                    <Card>
                        <CardHeader>
                            <h2>Sign Up</h2>
                        </CardHeader>
                        <CardBody>
                            <LocalForm onSubmit={values => handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label md={4} htmlFor="username">Username</Label>
                                    <Col md={12}>
                                        <Control.text model=".username"
                                            id="username"
                                            name="username"
                                            placeholder="Bobbini43"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".username"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Please enter a username"
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label md={4} htmlFor="email">Email</Label>
                                    <Col md={12}>
                                        <Control.text model=".email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Please enter your email",
                                                validEmail: "Please choose a valid email"

                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label md={4} htmlFor="password">Password</Label>
                                    <Col md={12}>
                                        <Control.text model=".password"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".password"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Please enter your password"
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label md={12} htmlFor="passwordConfirmation">Confirm Password</Label>
                                    <Col md={12}>
                                        <Control.text model=".passwordConfirmation"
                                            id="passwordConfirmation"
                                            name="passwordConfirmation"
                                            placeholder="Confirm Password"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".password"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Please enter your password"
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="d-flex justify-content-center pt-5 px-5">
                                        <Button type="submit" color="primary" className="form-control">
                                            Sign up
                                        </Button>
                                    </Col>
                                    <span className="col-12 text-center pt-3">
                                        Already have an account?
                                        <Link to="/account/login" style={{ color: 'blue' }}> Sign in here.</Link>
                                    </span>
                                </Row>
                            </LocalForm>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );

}

export default SignUp;