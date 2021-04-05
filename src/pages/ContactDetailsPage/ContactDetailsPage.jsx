
import { Component } from 'react'

import './ContactDetailsPage.scss'

export class ContactDetailsPage extends Component {
    render() {
        return (
            <div className='contact-details-page'>
                <button onClick={this.props.closeContactDetails}>X</button>
                <h3>Name:{this.props.selectedContact.name}</h3>
                <h3>Phone:{this.props.selectedContact.phone}</h3>
                <h3>Email:{this.props.selectedContact.email}</h3>
            </div>
        )
    }
}
