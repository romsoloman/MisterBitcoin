import { Component } from 'react'
import { connect } from 'react-redux'
import userService from '../../services/userService';
import { signUp } from '../../store/actions/userActions'

import './SignupPage.scss'

export class _SignupPage extends Component {
    state = {
        user: {
            name: ''
        },
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ user: { ...prevState.user, [field]: value } }))
    }
    onSaveUser = async (ev) => {
        ev.preventDefault();
        await this.props.signUp({ ...this.state.user })
        this.props.history.push('/');
    }
    render() {
        const { user } = this.state;
        return (
            user && <form className='signup-page' onSubmit={(ev) => ev.preventDefault()}>
                <div className="name">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={user.name} onChange={this.handleChange} />
                </div>
                <button onClick={this.onSaveUser}>Sign Up</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    signUp
}

export const SignupPage = connect(null, mapDispatchToProps)(_SignupPage)