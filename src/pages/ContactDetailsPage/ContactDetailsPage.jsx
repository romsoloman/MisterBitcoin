
import { Component } from 'react'
import { Link } from 'react-router-dom';
import contactService from '../../services/contactService';

import './ContactDetailsPage.scss'

export class ContactDetailsPage extends Component {
    state = {
        contact: null
    }
    componentDidMount() {
        this.loadContact();
    }
    loadContact = async () => {
        const { id } = this.props.match.params;
        const contact = await contactService.getContactById(id)
        this.setState({ contact })
    }
    closeDetails = () => {
        this.props.history.push('/contacts')
    }
    onDeleteContact = async (ev) => {
        ev.preventDefault();
        await contactService.deleteContact(this.props.match.params.id)
        this.props.history.push('/contacts');
    }
    render() {
        const { contact } = this.state;
        return (
            contact && <div className='contact-details-page'>
                <button onClick={this.closeDetails}>X</button>
                <h3>Name:{contact.name}</h3>
                <h3>Phone:{contact.phone}</h3>
                <h3>Email:{contact.email}</h3>
                <Link to={'/contacts/edit/' + this.props.match.params.id}>Edit Contact</Link>
                <button onClick={this.onDeleteContact}>Delete Contact</button>
            </div>
        )
    }
}
