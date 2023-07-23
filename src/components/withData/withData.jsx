import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentRoutines } from '../../redux/routines/routines.selector';

import LoadingRoutine from '../LoadingRoutine/LoadingRoutine';
const withData = WrappedComponent => {
    const ComponentData = ({ routinesCollection, ...otherProps }) => {
        if (routinesCollection === null) {
            return <div className='list-routine'>
                <LoadingRoutine />
                <LoadingRoutine />
                <LoadingRoutine />
                <LoadingRoutine />
                <LoadingRoutine />
                <LoadingRoutine />
                <LoadingRoutine />
            </div>
        } else if (routinesCollection === undefined) {
            return "undefined"
        }
        else if (routinesCollection.legth === 0) {
            return <h1 style={{ margin: "auto", fontSize: "5rem", color: "#525252" }}> You have no routine yet add routine</h1>
        }
        else return <WrappedComponent routinesCollection={routinesCollection} {...otherProps} />
    }
    const mapStateToProps = createStructuredSelector({
        routinesCollection: selectCurrentRoutines
    })
    return connect(mapStateToProps)(ComponentData);
};

export default withData;