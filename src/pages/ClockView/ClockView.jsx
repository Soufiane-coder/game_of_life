
import './ClockView.scss';
import ClockContainer from '../../components/ClockContainer/ClockContainer';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentRoutines } from '../../redux/routines/routines.selector';

const ClockView = ({ routineCollection }) => {
    return (
        <div className='clock-view-page'>
            <ClockContainer routines={routineCollection} am />
            <ClockContainer routines={routineCollection} pm />
        </div>
    )
}

const mapPropsToMap = createStructuredSelector({
    routineCollection: selectCurrentRoutines
})

export default connect(mapPropsToMap)(ClockView);