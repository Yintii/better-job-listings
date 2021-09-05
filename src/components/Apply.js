import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

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
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Apply;