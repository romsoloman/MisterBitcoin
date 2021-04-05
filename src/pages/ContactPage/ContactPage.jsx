import { Component } from 'react'
import contactService from '../../services/contactService';
import { ContactList } from '../../cmps/ContactList';
import { ContactDetailsPage } from '../ContactDetailsPage';
import { ContactFilter } from '../../cmps/ContactFilter';
import './ContactPage.scss'

export class ContactPage extends Component {
    state = {
        contacts: null,
        selectedContact: null,
        filterBy: null,
    }
    componentDidMount() {
        this.loadContacts();
    }
    loadContacts = async () => {
        const contacts = await contactService.getContacts(this.state.filterBy);
        this.setState({ contacts })
    }
    onSelectContact = async contactId => {
        const selectedContact = await contactService.getContactById(contactId);
        this.setState({ selectedContact })
    }
    closeContactDetails = () => {
        this.setState({ selectedContact: null })
    }
    onFilter = filterBy => {
        this.setState({ filterBy }, this.loadContacts);
    }
    get showSelectedContact() {
        return (this.state.selectedContact && <ContactDetailsPage selectedContact={this.state.selectedContact} closeContactDetails={this.closeContactDetails} />)
    }
    render() {
        const { contacts } = this.state;
        return (
            contacts && <div className='contact-page'>
                <h1>Contacts</h1>
                <ContactFilter onFilter={this.onFilter} />
                <ContactList contacts={contacts} onSelectContact={this.onSelectContact} />
                <>
                    {this.showSelectedContact}
                </>
            </div>
        )
    }
}
