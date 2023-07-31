import React from 'react';
import './LoadingRoutine.scss';

const LoadingRoutine = ({ routine = {} }) => {
    return (
        <>

            <div className="loading-routine " id={routine.taskId}>
                <div className="emoji"></div>
                <div className="title">{routine.title}</div>
                <div className="description">{routine.description}</div>
                <div className="extra">
                </div>
                <div className="buttons">
                    <button className="btn"></button>
                    <button className="btn"></button>
                    <button className="btn"></button>
                    <button className="btn"></button>
                </div>
            </div>
        </>
    )

}


export default LoadingRoutine;