import { Component } from 'react'
import contactService from '../../services/contactService';
import { ContactList } from '../../cmps/ContactList';
import { ContactFilter } from '../../cmps/ContactFilter';
import './ContactPage.scss'
import { Link } from 'react-router-dom';

export class ContactPage extends Component {
    state = {
        contacts: null,
        filterBy: null,
    }
    componentDidMount() {
        this.loadContacts();
    }
    loadContacts = async () => {
        const contacts = await contactService.getContacts(this.state.filterBy);
        this.setState({ contacts })
    }
    closeContactDetails = () => {
        this.setState({ selectedContact: null })
    }
    onFilter = filterBy => {
        this.setState({ filterBy }, this.loadContacts);
    }
    render() {
        const { contacts } = this.state;
        return (
            contacts && <div className='contact-page'>
                <ContactFilter onFilter={this.onFilter} />
                <ContactList contacts={contacts} />
                <button><Link to='/contacts/edit' >Add Contact</Link></button>
            </div>
        )
    }
}
