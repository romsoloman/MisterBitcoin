
import { Component } from 'react'
import contactService from '../../services/contactService';

import './ContactEditPage.scss'

export class ContactEditPage extends Component {
    state = {
        contact: null,
        errMsg: '',
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        const contact = id ? await contactService.getContactById(id) : await contactService.getEmptyContact();
        if (contact) return this.setState({ contact });
        else this.setState({ errMsg: 'Contact Not Found' })
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    onSaveContact = async (ev) => {
        ev.preventDefault();
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contacts');
    }
    render() {
        const { contact } = this.state;
        return (
            contact && <form className='edit-page' onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={contact.name} onChange={this.handleChange} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={contact.email} onChange={this.handleChange} />

                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" value={contact.phone} onChange={this.handleChange} />

                <button onClick={this.onSaveContact}>Save Contact</button>
            </form>
        )
    }
}
