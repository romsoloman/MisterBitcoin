
import { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContactById, removeContact, chargeContact } from '../../store/actions/contactActions';
import { loadUser } from '../../store/actions/userActions';

import './ContactDetailsPage.scss'
import { TransferFund } from '../../cmps/TransferFund/TransferFund';
import { MovesList } from '../../cmps/MovesList/MovesList';

export class _ContactDetailsPage extends Component {

    componentDidMount() {
        this.props.getContactById(this.props.match.params.id)
        this.props.loadUser()
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
        const { contact, user } = this.props;
        return (
            (contact && user) && <div className='contact-details-page'>
                <header>
                    <button onClick={this.closeDetails} className='exit-btn'><i className="fas fa-times"></i></button>
                </header>
                <main className="user-info">
                    <h3>Name: {contact.name}</h3>
                    <h3>Phone: {contact.phone}</h3>
                    <h3>Email: {contact.email}</h3>
                    <TransferFund contact={contact} />
                    <MovesList moves={user.moves} />
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
    contact: state.contactReducer.currContact,
    user: state.userReducer.user
})

const mapDispatchToProps = {
    getContactById,
    removeContact,
    chargeContact,
    loadUser
}

export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage)