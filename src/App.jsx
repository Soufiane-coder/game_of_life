import "./App.scss";
import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import GameField from "./pages/GameField/GameField";
import Setting from "./pages/Setting/Setting";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import DisplayModeSwitcher from './components/DisplayModeSwitcher/DisplayModeSwitcher';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { selectCurrentDisplayMode } from "./redux/display-mode/display-mode.selector";
import ClockView from "./pages/ClockView/ClockView";
import NotificationPromp from "./components/NotficationPromp/NotificationPromp";
const App = ({ user, displayMode }) => {
    return (
        <div id={displayMode}>
            <NotificationPromp />
            <DisplayModeSwitcher />
            <HashRouter>
                <NavigationBar />
                <Switch>
                    <Route exact={true} path="/">

                        <LandingPage />
                    </Route>
                    <Route exact={true} path="/clockView">

                        <ClockView />
                    </Route>
                    <Route exact={true} path="/signin">
                        {!user ? (
                            <SignInAndSignUp />
                        ) : (
                            <Redirect to="/gameField" />
                        )}
                    </Route>

                    <Route exact={false} path='/gameField'>
                        {user ? <GameField /> : <Redirect to="/signin" />}
                    </Route>
                    <Route exact={true} path="/statistics">
                        {user ? <div>statistic</div> : <Redirect to="/signin" />}
                    </Route>
                    <Route exact={true} path="/settings" component={Setting} />
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

// export default App;
