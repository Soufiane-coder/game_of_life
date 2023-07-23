import React from 'react';
import "./route.scss";
import { withRouter } from 'react-router-dom';

const Routing = (props) => {
    console.log(props);
    return (
        <div>go to console</div>
    )
}

export default withRouter(Routing);