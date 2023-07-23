import React from "react";
import './ToggleSignInSignUp.scss';

const ToggleSignInSignUp = ({ parent }) => (
    <div className="toggle-sign-in-sign-up" onClick={() => parent.setState({ hidden: !parent.state.hidden })}>
        <span className="is-sign-in"
            style={
                {
                    color: `${parent.state.hidden ? '#009245' : '#383838'}`,
                    borderBottom: `3px solid ${parent.state.hidden ? '#009245' : '#383838'}`
                }}
        >Sign in</span>
        <span className="is-sign-up"
            style={
                {
                    color: `${parent.state.hidden ? '#383838' : '#009245'}`,
                    borderBottom: `3px solid ${parent.state.hidden ? '#383838' : '#009245'}`
                }}
        >Sign up</span>
    </div>
)

export default ToggleSignInSignUp;