import React, { useEffect } from "react";
import "./Setting.scss";
import DisplayModeSwitcher from '../../components/DisplayModeSwitcher/DisplayModeSwitcher';

import { Route , Link} from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCurrentUser } from '../../redux/user/user.selector';
import LogoGOL from '../../assets/clipart/game_of_life_clipart.svg';

const Setting = ({user, history, location: {pathname}}) => {
    useEffect(()=> {
        if(pathname === '/settings'){
            history.push('/settings/profile')
        }
    })
        return (
            <>
                
                <div className="settings">
                    <nav className="settings__nav-bar">
                        <img src={LogoGOL} alt="" className="settings__logo-img" />
                        <Link to='/settings/profile'  
                            className={`settings__nav-bar-item ${pathname === '/settings/profile' ? "settings__nav-bar-item--selected" : ""}`} >Profile</Link>
                        <Link to='/settings/appearance'
                            className={`settings__nav-bar-item ${pathname === '/settings/appearance' ? "settings__nav-bar-item--selected" : ""}`}>Appearance</Link>
                    </nav>
                    <main className="settings__dashboard">
                        <Route exact path="/settings/profile">
                            <h1 className="settings__title">Profile</h1>
                            <ul className="settings__setting-list">
                                <li className="settings__setting-item">
                                    <label className="settings__setting-label">Username</label>
                                    <p>{user.displayName}</p>
                                </li>
                            </ul>
                        </Route>
                        <Route exact path="/settings/appearance">
                            <h1 className="settings__title">Appearance</h1>
                            <ul className="settings__setting-list">
                                <li className="settings__setting-item">
                                    <label className="settings__setting-label" htmlFor="display-mode-switcher">Display mode</label>
                                    <DisplayModeSwitcher/>
                                </li>
                            </ul>
                        </Route>
                    </main>
                </div>
            </>
        );
    }

    const mapStateToProps = createStructuredSelector({
        user: selectCurrentUser
    })

export default connect(mapStateToProps)(Setting);