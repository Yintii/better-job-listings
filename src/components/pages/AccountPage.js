import userEvent from '@testing-library/user-event';
import React from 'react';
import { Media } from 'reactstrap';

const AccountPage = (props) =>{

    const mySkills = props.user.skills.map(skill => {
        return(<li>{skill}</li>)
    })

    return(
        <div className="container">
            <div className="row p-5">
                <div className="col-12 col-md-6 order-2">
                    <Media src={props.user.pfp} width="400" className="rounded" />
                </div>
                <div className="col-12 col-md-6">
                    <h1>{props.user.username}</h1>
                    <h2>{props.user.email} / {props.user.phone}</h2>
                    <span>{props.user.tag}</span>
                    <h3>Skills:</h3>
                    <ul className="text-black">
                        {mySkills}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;