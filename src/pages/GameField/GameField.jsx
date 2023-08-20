import React, { useEffect, useState } from 'react';
import Header from '../../layout/GameField/Header/Header';
import './GameField.scss';
import ListRoutine from '../../layout/GameField/ListRoutine/ListRoutine';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { setCurrentRoutines } from '../../redux/routines/routines.actions';
import myServer from "../../components/server/server";
import $ from 'jquery';
import MessageWindow from '../../components/MessageWindow/MessageWindow';
import MessageContent from '../../components/MessageContent/MessageContent';


const GameField = ({ setCurrentRoutines, user }) => {
    const [showMessagePopUp, setShowMessagePopUp] = useState(false);
    const [showMessageContentPopUp, setShowMessageContentPopUp] = useState(false);
    const [selectedFilterOption, setSelectedFilterOption] = useState("all");


    useEffect(() => {
        const getFetchRoutines = async () => {
            let res;
            try {
                res = await $.ajax({
                    url: `${myServer}/listRoutine.php`,
                    method: "post",
                    data: {
                        userId: user.userId
                    }
                });
                const allRoutines = JSON.parse(res).reverse();
                setCurrentRoutines(allRoutines);
            } catch (err) {
                console.error(
                    `Error cannot connect with the data base to list all routines`, err.message
                );
            }
        }
        getFetchRoutines();
    }, [user]);


    return (
        <div className='game__field'>
            <main>
                <Header {...{ selectedFilterOption, setSelectedFilterOption }} />
                <ListRoutine {...{ setShowMessagePopUp, setShowMessageContentPopUp, selectedFilterOption }} />

                {
                    showMessagePopUp && <MessageWindow {...{ showMessagePopUp, setShowMessagePopUp }} />
                }
                {
                    showMessageContentPopUp && <MessageContent {...{ setShowMessageContentPopUp, showMessageContentPopUp }} />
                }

            </main>
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentRoutines: (routines) => dispatch(setCurrentRoutines(routines)),
})
export default connect(mapStateToProps, mapDispatchToProps)(GameField);