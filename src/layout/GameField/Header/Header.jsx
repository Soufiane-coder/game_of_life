import React, { useEffect } from "react";
import { ReactComponent as CoinIcon } from '../../../assets/icons/coin-icon.svg';
import './Header.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { selectCurrentRoutines } from '../../../redux/routines/routines.selector';
import { useState } from "react";

import Filter from '../../../components/Filter/Filter';

import { displayAddRoutinePopupState } from "../../../redux/popup/popup.actions";


const Header = ({ user, routines, selectedFilterOption, setSelectedFilterOption, displayAddRoutinePopupState }) => {


    const [optionsTags, setOptionsTags] = useState({
        all: '0',
        important: '0',
        waiting: '0',
        completed: '0',
    });

    useEffect(() => {
        Object.keys(optionsTags).forEach(tagName => {
            let tagValue = 'all';
            switch (tagName) {
                case 'all':
                    tagValue = Object.keys(routines || {}).length;
                    break;
                case 'important':
                    tagValue = routines?.reduce((accum, routine) => routine.priority === "important" ? ++accum : accum, 0);
                    break;
                case 'waiting':
                    tagValue = routines?.reduce((accum, routine) => routine.submitted === "0" ? ++accum : accum, 0);
                    break;
                case 'completed':
                    tagValue = routines?.reduce((accum, routine) => routine.submitted === "1" ? ++accum : accum, 0);
                    break;
                default:
                    tagValue = Object.keys(routines || {}).length;
            }
            setOptionsTags(oldTags => ({ ...oldTags, [tagName]: tagValue }));
        })
    }, [routines])


    const handleRadioChange = (event) => {
        setSelectedFilterOption(event.target.value); // Update the state with the selected option
    };


    return (
        <div className="game__field--header">

            <div className="updating-informations">
                <p className="notification-routine">Routines</p>
                <div className="prices-and-xps">
                    <div className="xp">{user?.xp}XP</div>
                    <div className="coins">{user?.coin}<CoinIcon /></div>
                </div>
            </div>
            <div className="filter-and-adding-button">
                <div className="filter">
                    <input type="radio" name="filter" id="all" value="all"
                        checked={selectedFilterOption === "all"}
                        onChange={handleRadioChange} />
                    <label className="filter-item all" htmlFor="all">All routine <span className="tag">{optionsTags.all}</span></label>

                    <input type="radio" name="filter" id="_important" value="important"
                        checked={selectedFilterOption === "important"}
                        onChange={handleRadioChange} />
                    <label className="filter-item important" htmlFor="_important">Important <span className="tag">{optionsTags.important}</span></label>

                    <input type="radio" name="filter" id="waiting" value="waiting"
                        checked={selectedFilterOption === "waiting"}
                        onChange={handleRadioChange} />
                    <label className="filter-item waiting" htmlFor="waiting"> Waiting <span className="tag">{optionsTags.waiting}</span></label>

                    <input type="radio" name="filter" id="completed" value="completed"
                        checked={selectedFilterOption === "completed"}
                        onChange={handleRadioChange} />
                    <label className="filter-item completed" htmlFor="completed"> Completed <span className="tag">{optionsTags.completed}</span></label>
                    <span className="selector"></span>
                </div>
                <Filter />
                <button onClick={() => displayAddRoutinePopupState(true)}>+ Add Routine</button>

                {/* <button type="button" class="button" onClick={() => setPopup(true)}>
                    <span class="button__text">Add Item</span>
                    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                </button> */}
            </div>
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    routines: selectCurrentRoutines,
})

const mapDispatchToProps = dispatch => ({
    displayAddRoutinePopupState: (state) => dispatch(displayAddRoutinePopupState(state)),

})


export default connect(mapStateToProps, mapDispatchToProps)(Header);