import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const GoBackButton = () =>{
    const history = useHistory();
    return <Button color="secondary" size="lg" onClick={() => history.goBack()}>Back</Button>;
}

export default GoBackButton;
