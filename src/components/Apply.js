import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const Apply = ({job}) => {
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col-12 col-md-6">
                    <h1>{job.company}</h1>
                    <p>{job.position} - {job.pay}</p>
                    <p>{job.description}</p>
                </div>
                <div className="col-12 col-md-6">
                    <Form>
                        <FormGroup id="application">
                            <Label>First Name </Label>
                            <Input type="text"/>
                            <Label>Last Name </Label>
                            <Input type="text" />
                            <Label>Email </Label>
                            <Input type="text" />
                            <Label>Phone Number </Label>
                            <Input type="number" />
                            <Label>Resume / CV </Label>
                            <Input type="file" className="form-control-file" />
                            <Input type="submit" className="btn btn-success" />
                            <span className="col-12 text-center pt-3">
                                Log in for quick apply <Link style={{ color: 'blue' }} to="/account/login">Log in</Link>
                            </span>
                            <br/>
                            <span className="col-12 text-center pt-3">
                                Don't have an account?
                                <Link to="/account/register" style={{ color: 'blue' }}> Sign up here.</Link>
                            </span>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Apply;