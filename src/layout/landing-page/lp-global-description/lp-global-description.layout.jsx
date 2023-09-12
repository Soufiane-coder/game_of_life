import './lp-gloabel.style.scss';
import { ReactComponent as ComplateRoutineUndraw } from '../../../assets/undraw/undraw_done_checking_re_6vyx.svg';


const LPGlobalDescription = () => {
    return (
        <div className='lp-global-description complete-routine'>
            <div className='complete-routine__description'>
                <h1 className='complete-routine__description-title'>Complete your routine</h1>
                <p className='complete-routine__description-paragraph'>Our website offers a unique approach to organizing daily routines, with the aim of improving your life and increasing your efficiency at work.</p>
            </div>
            <ComplateRoutineUndraw className='complete-routine__undraw' />
        </div>
    )
}

export default LPGlobalDescription;