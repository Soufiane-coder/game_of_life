import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./pages/landing-page/LandingPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import GameField from "./pages/GameField/GameField";
import Setting from "./pages/Setting/Setting";
import ClockView from "./pages/ClockView/ClockView";
import RoadMap from "./pages/roadMap/road-map";
import StatisticsPage from "./pages/Statistics/statistics.page";

import PopupField from "./layout/popup-field/popup-field.layout";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import NotificationPromp from "./components/NotficationPromp/NotificationPromp";
import UserBar from "./components/UserBar/UserBar";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { selectCurrentDisplayMode } from "./redux/display-mode/display-mode.selector";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../lib/firebase";
import UserLoader from "./layout/user-loader/user-loader.layout";
import { selectCurrentRoutines } from "./redux/routines/routines.selector";
import { useEffect } from "react";
import { getRoutines } from "../lib/firebase";
import { setCurrentRoutines } from "./redux/routines/routines.actions";

const App = ({ user, displayMode, routines, setCurrentRoutines }) => {
    const [userImp, userLoading, userError] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            getRoutines(user.uid).then(setCurrentRoutines);
        }
    }, [user]);

    return (
        <div id={displayMode}>
            {
                user ? <PopupField /> : ''
            }
            <NotificationPromp />
            <NavigationBar />

            <Switch>
                <Route exact={true} path="/signin">
                    {!user ? (
                        <SignInAndSignUp />
                    ) : (
                        <Redirect to="/gameField" />
                    )}
                </Route>
                <Route exact={true} path="/">
                    <LandingPage />
                </Route>
                {
                    userLoading ?
                        <UserLoader /> :
                        <>
                            <UserBar user={user} />
                            <Route exact={true} path="/clockView">
                                {user ?
                                    <ClockView />
                                    :
                                    <Redirect to="/signin" />}
                            </Route>
                            <Route exact={true} path='/gameField'>
                                {user ?
                                    <GameField />
                                    :
                                    <Redirect to="/signin" />}
                            </Route>
                            <Route exact={true} path="/statistics">
                                {user ?
                                    <>
                                        <StatisticsPage />
                                    </>
                                    :
                                    <Redirect to="/signin" />}
                            </Route>
                            <Route exact={true} path="/settings" component={Setting} />
                            <Route path='/roadMap/:routineId'>
                                {user ?
                                    <RoadMap />
                                    :
                                    <Redirect to="/signin" />}
                            </Route>
                        </>
                }
                <Route exact={true} path="*">
                    <div style={{ fontSize: "200px" }}>not found</div>
                </Route>
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    displayMode: selectCurrentDisplayMode,
    routines: selectCurrentRoutines
});
const mapDispatchToProps = dispatch => ({
    setCurrentRoutines: routines => dispatch(setCurrentRoutines(routines))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

