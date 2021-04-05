import { Component } from 'react'
import contactService from '../../services/contactService';
import { ContactList } from '../../cmps/ContactList';
import { ContactDetailsPage } from '../ContactDetailsPage';
import './ContactPage.scss'

export class ContactPage extends Component {
    state = {
        contacts: null,
        selectedContact: null,
    }
    componentDidMount() {
        this.loadContacts();
    }
    loadContacts = async () => {
        const contacts = await contactService.getContacts();
        this.setState({ contacts })
    }
    onSelectContact = async contactId => {
        const selectedContact = await contactService.getContactById(contactId);
        this.setState({ selectedContact })
    }
    closeContactDetails = () => {
        this.setState({ selectedContact: null })
    }
    get showSelectedContact() {
        return (this.state.selectedContact && <ContactDetailsPage selectedContact={this.state.selectedContact} closeContactDetails={this.closeContactDetails} />)
    }
    render() {
        const { contacts } = this.state;
        return (
            contacts && <div className='contact-page'>
                <h1>Contacts</h1>
                <ContactList contacts={contacts} onSelectContact={this.onSelectContact} />
                <>
                    {this.showSelectedContact}
                </>
            </div>
        )
    }
}
