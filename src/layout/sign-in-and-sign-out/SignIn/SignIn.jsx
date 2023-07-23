import React from 'react';
import $ from 'jquery';
import './SignIn.scss';
import { setCurrentUser } from '../../../redux/user/user.actions';
import { connect } from 'react-redux';
import myServer from '../../../components/server/server';
class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    _handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    _handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            let res = await $.ajax({
                url: `${myServer}/login.php`,
                method: 'post',
                data: {
                    email: email,
                    password: password
                }
            });
            res = JSON.parse(res);
            if (res.status === 'success') {
                this.props.setCurrentUser(res.user);
            }
        } catch (err) {
            console.error(`Error detected login : ${err}`);
        }

    }

    render() {
        return (
            <div className={`sign-in__container  ${this.props.hidden ? "hidden" : ""}`} >

                <form className="card" onSubmit={this._handleSubmit}>
                    <h1 className="sign-in">Sign In</h1>
                    <div className="inputBox">
                        <input type="text" name="email" value={this.state.email} required onChange={this._handleChange} />
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" name="password" value={this.state.password} required onChange={this._handleChange} />
                        <span>Password</span>
                    </div>

                    <button className="enter">Enter</button>

                </form>
                <button className='sign-in-with-google' > Sign in with Google</button>
            </div >
        )

    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(SignIn);