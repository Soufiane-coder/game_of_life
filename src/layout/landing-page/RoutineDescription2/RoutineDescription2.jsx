import React from "react";
import './RoutineDescription2.scss';
import { ReactComponent as InspiredUndraw } from '../../../assets/undraw/undraw_video_game_night_8h8m.svg';
import { ReactComponent as CoinUndraw } from '../../../assets/undraw/undraw_savings_re_eq4w.svg';
import Fade from 'react-reveal/Fade';

const RoutineDescription2 = () => (
    <div className="routine__description2">

        <div className="routine__description2__coins">
            <CoinUndraw />
            <div>
                <Fade>
                    <p className='routine__description2__coins--titre'>Earn coins</p>
                    <p className="routine__description2__coins--description">You can input your daily tasks and earn coins for completing them. You can also skip a task using coins, which can be earned from completed routines.</p>
                </Fade>
            </div>
        </div>
        <div className="routine__description2__inspired">
            <InspiredUndraw />
            <div style={{ width: "100%" }}>
                <Fade >
                    <p className='routine__description2__inspired--titre'>Video Games inspired</p>
                    <p className="routine__description2__inspired--description ">Inspired by video games, our approach is designed to keep you motivated to complete your daily routines.</p>
                </Fade>
            </div>
        </div>
    </div>
)
export default RoutineDescription2;