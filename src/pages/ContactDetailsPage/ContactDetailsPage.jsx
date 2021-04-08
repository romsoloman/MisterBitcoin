
import { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContactById, removeContact, chargeContact } from '../../store/actions/contactActions';
import contactService from '../../services/contactService';

import './ContactDetailsPage.scss'

export class _ContactDetailsPage extends Component {

    componentDidMount() {
        this.props.getContactById(this.props.match.params.id)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getContactById(this.props.match.params.id)
        }
    }
    closeDetails = () => {
        this.props.history.push('/contacts')
    }
    onDeleteContact = async (ev) => {
        ev.preventDefault();
        await this.props.removeContact(this.props.contact._id)
        this.props.history.push('/contacts');
    }
    render() {
        const { contact } = this.props;
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

const mapStateToProps = state => ({
    contact: state.contactReducer.currContact
})

const mapDispatchToProps = {
    getContactById,
    removeContact,
    chargeContact
}

export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage)