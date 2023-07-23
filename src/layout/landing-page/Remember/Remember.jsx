import React from 'react';
import './Remember.scss';
import { ReactComponent as TrainingUndraw } from '../../../assets/undraw/undraw_indoor_bike_pwa4.svg';
import { Fade, LightSpeed } from 'react-reveal';

const Remember = () => (
    <div className="remember__section">
        <LightSpeed left delay={100}>
            <h1 className='remember__section--big-title'>Remember</h1>
        </LightSpeed>
        <div className="remember__section--description">
            <TrainingUndraw />
            <Fade delay={200}>
                <p className='remember__section--description--motivation'>
                    every completed <span className='color-yellow'>task</span> brings you one step closer to achieving your <span className='color-red'>goals</span>. Keep up the <span className='color-green'>good</span> work and stay <span className='color-blue'>motivated</span>!
                </p>
            </Fade>
        </div>
    </div>
)

export default Remember;