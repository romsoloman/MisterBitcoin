import './ContactList.scss'
import { ContactPreview } from '../ContactPreview';

export const ContactList = ({ contacts, match }) => {
    return (
        <ul className='contact-list'>
            {contacts.map(contact => <ContactPreview contact={contact} key={contact._id} />)}
        </ul>
    )
}

