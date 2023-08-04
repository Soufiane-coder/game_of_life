import React, { useState } from "react";
import Routine from "../../../components/Routine/Routine";
import { Fade } from 'react-reveal';
import './ListRoutine.scss';
import withData from "../../../components/withData/withData";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFilteredOption } from "../../../redux/routines/routines.selector";


const ListRoutine = ({ setShowMessagePopUp, setShowMessageContentPopUp, filterOption, selectedFilterOption }) => {
    return (
        <div className="list-routine">
            {
                filterOption(selectedFilterOption)?.map(routine => {
                    return (
                        <Fade key={routine.taskId} bottom>
                            <Routine className='routine' key={routine.taskId} {...{ routine, setShowMessagePopUp, setShowMessageContentPopUp }} />
                        </Fade>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    filterOption: selectFilteredOption
})

export default connect(mapStateToProps)(withData(ListRoutine));
