import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentRoutines } from '../../redux/routines/routines.selector';

import LoadingRoutine from '../LoadingRoutine/LoadingRoutine';
const withData = WrappedComponent => {
    const ComponentData = ({ routinesCollection, ...otherProps }) => {
        const routinesTemplate = [0, 0, 0, 0, 0, 0, 0];
        // if (routinesCollection === null) {
        return <div className='list-routine'>
            {
                routinesCollection.map(() => <LoadingRoutine />)
            }
        </div>
        // } else if (routinesCollection === undefined) {
        //     return "undefined"
        // }
        // else if (routinesCollection.length === 0) {
        //     return <h1 style={{ margin: "auto", fontSize: "5rem", color: "#525252" }}> You have no routine yet add routine</h1>
        // }
        // else return <WrappedComponent routinesCollection={routinesCollection} {...otherProps} />
    }
    const mapStateToProps = createStructuredSelector({
        routinesCollection: selectCurrentRoutines
    })
    return connect(mapStateToProps)(ComponentData);
};

export default withData;