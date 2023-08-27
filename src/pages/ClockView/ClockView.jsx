
import './ClockView.scss';
import ClockContainer from '../../components/ClockContainer/ClockContainer';
import SlideRoutine from '../../components/slide-routine/slide-routine.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentRoutines } from '../../redux/routines/routines.selector';
import PageHeader from '../../components/PageHeader/page-header';
import { isAmPm, getCurrentRoutine, hourMinFormat } from './utils';
import { useState } from 'react';
import { useEffect } from 'react';


const ClockView = ({ routineCollection }) => {
    const [amPm, setAmPm] = useState({ ...isAmPm() });


    const [selectedRoutine, setSelectedRoutine] = useState('-2');

    useEffect(() => {
        console.log(selectedRoutine)
    }, [selectedRoutine])

    const handleChangeCheckBox = () => {
        setAmPm(old => ({ am: !old.am, pm: !old.pm }))
    }

    return (
        <>
            <PageHeader title={'Clock View'} />
            <div className='clock-view-page'>

                <ClockContainer routines={routineCollection} setSelectedRoutine={setSelectedRoutine} {...amPm} />

                <div className="toggleWrapper">
                    <input type="checkbox" className="dn" id='dn' checked={amPm.pm} onChange={handleChangeCheckBox} />
                    <label htmlFor="dn" className="toggle">
                        <span className="toggle__handler">
                            <span className="crater crater--1"></span>
                            <span className="crater crater--2"></span>
                            <span className="crater crater--3"></span>
                        </span>
                        <span className="star star--1"></span>
                        <span className="star star--2"></span>
                        <span className="star star--3"></span>
                        <span className="star star--4"></span>
                        <span className="star star--5"></span>
                        <span className="star star--6"></span>
                    </label>
                </div>

                <SlideRoutine {...{ routineCollection, selectedRoutine }} />


            </div>
        </>
    )
}

const mapPropsToMap = createStructuredSelector({
    routineCollection: selectCurrentRoutines
})

export default connect(mapPropsToMap)(ClockView);