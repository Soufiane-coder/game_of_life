import React, { useEffect, useState } from 'react';
import Header from '../../layout/GameField/Header/Header';
import './GameField.scss';
import ListRoutine from '../../layout/GameField/ListRoutine/ListRoutine';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { setCurrentRoutines } from '../../redux/routines/routines.actions';
import { selectCurrentRoutines } from '../../redux/routines/routines.selector';
import NotificationSystem from 'react-notification-system';
import { createRef } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const GameField = ({ setCurrentRoutines, user, routines}) => {
    const [selectedFilterOption, setSelectedFilterOption] = useState("all");
    const [loadingRoutine, setLoadingRoutine] = useState(true);
    const notificationSystem = createRef();
    const history = useHistory();
    if(!user){
        console.error("user is not logged in")
        history.push('/signin')
    }

    const style = {
        NotificationItem: { // Override the notification item
          DefaultStyle: { // Applied to every notification, regardless of the notification level
            fontSize: '2rem',
            width: '40rem',
          },
        },
        Title: {
            DefaultStyle: {
                fontSize: '2rem',
            }
        },
        MessageWrapper:{
            DefaultStyle: {
                margin: '5px',
            }
        }
      }
    useEffect(() => {
        setLoadingRoutine(!routines)
    }, [routines])

    if (loadingRoutine) {
        return (
            <h1>Loading routines ...</h1>
        )
    }
    return (
        <div className='game__field'>
            <NotificationSystem ref={notificationSystem} style={style} />
            
            <main>
                <Header {...{ selectedFilterOption, setSelectedFilterOption }} />
                <ListRoutine {...{ selectedFilterOption, notificationSystem }} />
            </main>
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    routines: selectCurrentRoutines
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentRoutines: (routines) => dispatch(setCurrentRoutines(routines)),
})
export default connect(mapStateToProps, mapDispatchToProps)(GameField);