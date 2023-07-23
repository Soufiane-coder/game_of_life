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
                    {
                        routine.submitted === '0' ?
                            <button className="btn btn-success done"></button>
                            :
                            <button className="btn btn-secondary done" disabled></button>
                    }


                    <button className="btn btn-info skip"></button>
                    <button className="btn remove  "></button>
                </div>
            </div>
        </>
    )

}


export default LoadingRoutine;