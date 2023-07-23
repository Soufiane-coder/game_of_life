import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SignIn from "../../layout/sign-in-and-sign-out/SignIn/SignIn";
import SignUp from "../../layout/sign-in-and-sign-out/SignUp/SignUp";
import { ReactComponent as UndrawMobileImage } from "../../assets/undraw/undraw_access_account_re_8spm.svg";
import ToggleSignInSignUp from "../../components/ToggleSignInSignUp/ToggleSignInSignUp";
import Flip from 'react-reveal/Flip';
import './SignInAndSignUp.scss';
import { withRouter } from 'react-router-dom';

class SignInAndSignUp extends React.Component {
    constructor({ history }) {
        super();
        if (localStorage.getItem('user')) {
            history.push('/');
        }
        this.history = history;
        this.state = {
            hidden: true
        }
    }
    render() {
        return (
            <>
                <div className="log-in-log-out">
                    <div className="side-bar" />
                    <div className="side-bar-dark" />
                    <Flip bottom>
                        <UndrawMobileImage />
                    </Flip>
                    <section className="form-section">
                        <ToggleSignInSignUp parent={this} />

                        <SignIn hidden={!this.state.hidden} history={this.history} />

                        <SignUp hidden={this.state.hidden} history={this.history} />
                    </section>
                </div>
            </>
        )
    }
}


export default withRouter(SignInAndSignUp);