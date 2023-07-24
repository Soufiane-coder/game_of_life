
import './ClockView.scss';
import ClockContainer from '../../components/ClockContainer/ClockContainer';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentRoutines } from '../../redux/routines/routines.selector';


// const data = [
//     {
//         startRoutine: '01:00:00',
//         endRoutine: '04:00:00',
//         bgEmojiColor: 'red'
//     },
//     {
//         startRoutine: '04:00:00',
//         endRoutine: '08:00:00',
//         bgEmojiColor: 'black'
//     },
//     {
//         startRoutine: '08:00:00',
//         endRoutine: '11:00:00',
//         bgEmojiColor: '#403504'
//     }
// ];

const ClockView = ({ routineCollection }) => {
    console.log(routineCollection)
    return (
        <div className='clock-view-page'>
            <ClockContainer data={routineCollection} am />
            <ClockContainer data={routineCollection} pm />
        </div>
    )
}

const mapPropsToMap = createStructuredSelector({
    routineCollection: selectCurrentRoutines
})

export default connect(mapPropsToMap)(ClockView);