
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
                <header>
                    <button onClick={this.closeDetails} className='exit-btn'><i className="fas fa-times"></i></button>
                </header>
                <main className="user-info">
                    <h3>Name: {contact.name}</h3>
                    <h3>Phone: {contact.phone}</h3>
                    <h3>Email: {contact.email}</h3>
                </main>
                <footer>
                    <button className='btn edit-btn'><Link to={'/contacts/edit/' + this.props.match.params.id}>Edit Contact</Link></button>
                    <button className='btn delete-btn' onClick={this.onDeleteContact}>Delete Contact</button>
                </footer>
            </div>
        )
    }
}
