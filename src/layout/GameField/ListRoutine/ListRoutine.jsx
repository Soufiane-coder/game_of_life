import React from "react";
import Routine from "../../../components/Routine/Routine";

import './ListRoutine.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFilteredOption } from "../../../redux/routines/routines.selector";


const ListRoutine = ({ filterOption, selectedFilterOption }) => {
    return (
        <div className="list-routine">
            {
                filterOption(selectedFilterOption)?.map(routine => {
                    return (

                        <Routine className='routine' key={routine.routineId} routine={routine} />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    filterOption: selectFilteredOption
})

export default connect(mapStateToProps)(ListRoutine);
