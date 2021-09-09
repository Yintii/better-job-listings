import React from 'react';
import { Form, FormGroup, Label, Input,
        Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';



/* This was getting ugly and long so I made a function to write it all for me*/
const createFormInputs = () =>{
    const required = val => val && val.length;
    const onlyNumbers = val => /\d+/.test(val);
    const inputs = ['firstName', 'lastName', 'email', 'phoneNumber']
    const inputFields = inputs.map(input => {
        let validators;
        let messages;
        let inputName;

        switch (input) {
            case 'firstName':
                inputName = 'First Name'
                break;
            case 'lastName':
                inputName = 'Last Name'
                break;
            case 'email':
                inputName = 'Email'
                break;
            case 'phoneNumber':
                inputName = 'Phone Number'
                break;
            default:
                return 'hello?'
                break;
        }

        if(input === 'phoneNumber'){
            validators = {
                required,
                onlyNumbers
            }
            messages = {
                required: `Please enter your ${input}`,
                onlyNumbers: 'Please enter a valid phone numer'
            }
        }else{
            validators = {
                required
            }
            messages = {
                required: `Please enter your ${input}`
                
            }
        }

        return (
            <React.Fragment>
                <Label md={4} htmlFor={input}>{inputName}</Label>
                <Col md={12}>
                    <Control.text model={`.${input}`}
                        id={input}
                        name={input}
                        className="form-control"
                        validators={validators}
                    />
                    <Errors
                        className="text-danger"
                        model={`.${input}`}
                        show="touched"
                        component="div"
                        messages={messages}
                    />
                </Col>
            </React.Fragment>
        );
    });
    return inputFields;
}

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
                    <LocalForm>
                        <Row className="form-group" id="application">
                            
                            {/**Saving a lot of space with this */}
                            {createFormInputs()}

                            <Label>Resume / CV </Label>
                            <Input type="file" className="form-control-file" />
                            <Input type="submit" className="btn btn-success" />
                            <span className="col-12 text-center pt-3">
                                <Link style={{ color: 'blue' }} to="/account/login">Log in</Link> for quick apply
                            </span>
                            <br/>
                            <span className="col-12 text-center pt-3">
                                Don't have an account?
                                <Link to="/account/register" style={{ color: 'blue' }}> Sign up here.</Link>
                            </span>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        </div>
    );
}

export default Apply;