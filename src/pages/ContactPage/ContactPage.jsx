import { Component } from 'react'
import { ContactList } from '../../cmps/ContactList';
import { ContactFilter } from '../../cmps/ContactFilter';
import './ContactPage.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadContacts } from '../../store/actions/contactActions'

export class _ContactPage extends Component {
    state = {
        contacts: null,
        filterBy: null,
    }
    componentDidMount() {
        this.props.loadContacts(this.state.filterBy)
    }
    onFilter = filterBy => {
        this.setState({ filterBy }, this.loadContacts);
    }
    render() {
        const { contacts } = this.props;
        return (
            contacts && <div className='contact-page'>
                <ContactFilter onFilter={this.onFilter} />
                <ContactList contacts={contacts} />
                <Link to='/contacts/edit' ><button><i className="fas fa-plus"></i></button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contactReducer.contacts
    }
}

const mapDispatchToProps = {
    loadContacts,
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)