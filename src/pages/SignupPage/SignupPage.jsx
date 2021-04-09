import { Component } from 'react'
import { connect } from 'react-redux'
import userService from '../../services/userService';
import { signUp, logout } from '../../store/actions/userActions'

import './SignupPage.scss'

export class _SignupPage extends Component {
    state = {
        user: {
            name: '',
            password: '',
        },
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'password' ? +target.value : target.value
        this.setState(prevState => ({ user: { ...prevState.user, [field]: value } }))
    }
    onSaveUser = async (ev) => {
        ev.preventDefault();
        await this.props.signUp({ ...this.state.user })
        this.props.history.push('/');
    }
    onLogout = async () => {
        await this.props.logout()
        this.props.history.push('/signup')
    }
    render() {
        const { user } = this.state;
        const loggedinUser = JSON.parse(sessionStorage.getItem('loggedinUser'));
        if (loggedinUser) {
            return (
                <div>
                    <h1>Welcome {loggedinUser.name}</h1>
                    <button onClick={this.onLogout}>Logout</button>
                </div>
            )
        } else {
            return (
                user && <form className='signup-page' onSubmit={(ev) => ev.preventDefault()}>
                    <div className="name">
                        <label htmlFor="name">Please Enter Your Name:</label>
                        <input type="text" id="name" name="name" value={user.name} onChange={this.handleChange} />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={user.password} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.onSaveUser}>Sign Up</button>
                </form>
            )
        }
    }
}

const mapDispatchToProps = {
    signUp,
    logout,
}

export const SignupPage = connect(null, mapDispatchToProps)(_SignupPage)