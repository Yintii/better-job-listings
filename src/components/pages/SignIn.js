import React from 'react';
import { Button, Card, CardBody, CardHeader,
         Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


const SignIn = (props) => {

    const required = val => val && val.length;


    const handleSubmit = (values) => {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }



    return(
        <div className="container">
            <div className="row d-flex justify-content-center py-5">
                <div className="col-8 py-5">
                    <Card>
                        <CardHeader>
                            <h2>Sign in</h2>
                        </CardHeader>
                        <CardBody>
                            <LocalForm onSubmit={values => handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label md={4} htmlFor="email">Email</Label>
                                    <Col md={12}>
                                        <Control.text model=".email" 
                                                      id="email"
                                                      name="email"
                                                      placeholder="Email"
                                                      className="form-control"
                                                      validators={{
                                                          required
                                                      }}
                                        />
                                        <Errors 
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Please enter your email"
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
                                <Row>
                                    <Col md={12} className="d-flex justify-content-center px-5 pt-5">
                                        <Button type="submit" color="success" className="form-control">
                                            Sign in
                                        </Button>
                                    </Col>
                                    <span className="col-12 text-center pt-3">
                                        Don't have an account?
                                        <Link to="/account/register" style={{color: 'blue'}}> Sign up here.</Link>
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

export default SignIn;