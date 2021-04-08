
import { Component } from 'react'
import { connect } from 'react-redux';
import contactService from '../../services/contactService';
import { saveContact } from '../../store/actions/contactActions'

import './ContactEditPage.scss'

export class _ContactEditPage extends Component {
    state = {
        contact: null,
        errMsg: '',
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        try {
            const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
            this.setState({ contact })
        } catch (err) {
            this.setState({ errMsg: 'contact Not Found' })
        }
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    onSaveContact = async (ev) => {
        ev.preventDefault();
        await this.props.saveContact({ ...this.state.contact })
        this.props.history.push('/contacts');
    }
    render() {
        const { contact } = this.state;
        return (
            contact && <form className='edit-page' onSubmit={(ev) => ev.preventDefault()}>
                <main>
                    <div className="name">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={contact.name} onChange={this.handleChange} />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={contact.email} onChange={this.handleChange} />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" value={contact.phone} onChange={this.handleChange} />
                    </div>
                </main>

                <button onClick={this.onSaveContact}>Save Contact</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    saveContact
}

export const ContactEditPage = connect(null, mapDispatchToProps)(_ContactEditPage)
