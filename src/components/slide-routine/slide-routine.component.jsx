import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slide-routine.style.scss';
import { sortArrayByStartTime, hourMinFormat, getRoutineIndexInTime } from './utils';
import Routine from '../Routine/Routine';

const SlideItem = ({ currentRoutine }) => {
    return (
        <div className="slide__each-slide-effect">
            <Routine routine={currentRoutine} />
        </div>
    )
}

const SlideRoutine = ({ routineCollection }) => {
    const sortedRoutine = sortArrayByStartTime(routineCollection);
    const index = getRoutineIndexInTime(sortedRoutine, hourMinFormat());

    const slideProperites = {
        indicators: true,
        autoplay: false,
        transitionDuration: 500,
        defaultIndex: index === -1 ? sortedRoutine.length : index,
    }

    return (
        <div className="slide">
            <Slide  {...slideProperites}>
                {
                    sortedRoutine.map((currentRoutine, key) => (<SlideItem {...{ key, currentRoutine }} />))
                }
                {
                    <div className="slide__each-slide-effect">

                        <h1>There is no routine in this time</h1>

                    </div>
                }
            </Slide>
        </div>
    )
}

export default SlideRoutine;