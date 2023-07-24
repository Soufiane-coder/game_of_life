import Clock from '../../components/Clock/Clock';
import './ClockContainer.scss';
import { beginningOfHourToDegrees, hoursToDegrees } from '../../utils/clock';

const Arcs = ({ startDeg, degLong, strockColor, className }) => {
    const circumference = 2 * 3.14 * 80 // = 502.4
    const strokeLength = circumference / 100 * degLong / 3.6 // = 351.68 70% -> to deg
    return (
        < div className={`arcs ${className}`} >
            <svg width='500px' viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${startDeg - 90}deg)` }}>
                <circle cx="90" cy="90" r="80" fill="none" stroke={strockColor || 'green'} strokeWidth="10" strokeDasharray={`${strokeLength},${circumference}`} />
            </svg>
        </div >
    )
}




const ClockContainer = ({ data, am, pm }) => {

    return (
        <div className="clock-container">
            {
                data.map((item, key) => {
                    const routine = {
                        startRoutine: item.startRoutine,
                        endRoutine: item.endRoutine,
                        bgEmojiColor: '#' + item.bgEmojiColor,
                    }
                    console.log(routine)
                    return (
                        <Arcs key={key}
                            startDeg={beginningOfHourToDegrees(routine.startRoutine, am, pm)}
                            degLong={hoursToDegrees(routine.startRoutine, routine.endRoutine, am, pm)}
                            className='clock-b'
                            strockColor={routine.bgEmojiColor} />
                    )
                })
            }
            <Clock />
        </div>
    )
}

export default ClockContainer;