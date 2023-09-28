import React from 'react';
import './ComplateRoutineDescription.scss';
import { ReactComponent as ComplateRoutineUndraw } from '../../../assets/undraw/undraw_done_checking_re_6vyx.svg';
import Fade from 'react-reveal/Fade';

const ComplateRoutineDescription = () => (
    <div className="complate__routine">
        <div className='complate__routine-description'>
            <Fade distance="100%">
                <h2 className='description-titre'>Complete your routine</h2>
                <p className='description-paragraphe'>Our website offers a unique approach to organizing daily routines, with the aim of improving your life and increasing your efficiency at work.</p>
            </Fade>
        </div>
        <ComplateRoutineUndraw className='complate__routine-undraw' />
    </div>
)

export default ComplateRoutineDescription;