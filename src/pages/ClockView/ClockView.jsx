
import './ClockView.scss';
import ClockContainer from '../../components/ClockContainer/ClockContainer';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentRoutines } from '../../redux/routines/routines.selector';
import PageHeader from '../../components/PageHeader/page-header';
import { isAmPm } from './utils';
import { useState } from 'react';

const ClockView = ({ routineCollection }) => {
    const [amPm, setAmPm] = useState({ ...isAmPm() });
    const handleChangeCheckBox = () => {
        setAmPm(old => ({ am: !old.am, pm: !old.pm }))
    }
    return (
        <>
            <PageHeader title={'Clock View'} />
            <div className='clock-view-page'>
                {
                    <ClockContainer routines={routineCollection} {...amPm} />
                }
                <div class="toggleWrapper">
                    <input type="checkbox" class="dn" id='dn' checked={amPm.pm} onChange={handleChangeCheckBox} />
                    <label for="dn" class="toggle">
                        <span class="toggle__handler">
                            <span class="crater crater--1"></span>
                            <span class="crater crater--2"></span>
                            <span class="crater crater--3"></span>
                        </span>
                        <span class="star star--1"></span>
                        <span class="star star--2"></span>
                        <span class="star star--3"></span>
                        <span class="star star--4"></span>
                        <span class="star star--5"></span>
                        <span class="star star--6"></span>
                    </label>
                </div>
                <div className="clock-view-page__current-routine">
                    <h3>Title : </h3><p>title</p>
                    <h4>Descripiton : </h4><p>description</p>
                    <h4>Message : </h4><p>message</p>
                </div>
            </div>
        </>
    )
}

const mapPropsToMap = createStructuredSelector({
    routineCollection: selectCurrentRoutines
})

export default connect(mapPropsToMap)(ClockView);