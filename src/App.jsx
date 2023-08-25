import "./App.scss";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";

import LandingPage from "./pages/landing-page/LandingPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import GameField from "./pages/GameField/GameField";
import Setting from "./pages/Setting/Setting";
import ClockView from "./pages/ClockView/ClockView";
import RoadMap from "./pages/roadMap/road-map";
import StatisticsPage from "./pages/Statistics/statistics.page";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import NotificationPromp from "./components/NotficationPromp/NotificationPromp";
import UserBar from "./components/UserBar/UserBar";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { selectCurrentDisplayMode } from "./redux/display-mode/display-mode.selector";


const App = ({ user, displayMode }) => {
    return (
        <div id={displayMode}>
            <NotificationPromp />
            <HashRouter>
                <NavigationBar />

                <Switch>

                    <Route exact={true} path="/">
                        <LandingPage />
                    </Route>
                    <Route exact={true} path="/clockView">
                        {user ?
                            <>
                                <UserBar username={user.username} />
                                <ClockView />
                            </>
                            :
                            <Redirect to="/signin" />}
                    </Route>
                    <Route exact={true} path="/signin">
                        {!user ? (
                            <SignInAndSignUp />
                        ) : (
                            <Redirect to="/gameField" />
                        )}
                    </Route>

                    <Route exact={true} path='/gameField'>
                        {user ?
                            <>
                                <UserBar username={user.username} />
                                <GameField />
                            </>
                            :
                            <Redirect to="/signin" />}
                    </Route>
                    <Route exact={true} path="/statistics">
                        {user ?
                            <>
                                <UserBar username={user.username} />
                                <StatisticsPage />
                            </>
                            :
                            <Redirect to="/signin" />}
                    </Route>
                    <Route exact={true} path="/settings" component={Setting} />

                    <Route path='/roadMap/:routineId'>
                        {user ?
                            <>
                                <UserBar username={user.username} />
                                <RoadMap />
                            </>
                            :
                            <Redirect to="/signin" />}
                    </Route>

                    <Route exact={true} path="*">
                        <div style={{ fontSize: "200px" }}>not found</div>
                    </Route>

                </Switch>
            </HashRouter>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    displayMode: selectCurrentDisplayMode,
});

export default connect(mapStateToProps)(App);

