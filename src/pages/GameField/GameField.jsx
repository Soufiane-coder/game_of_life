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


const GameField = ({ setCurrentRoutines, user }) => {

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
                <ListRoutine {...{ selectedFilterOption }} />
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