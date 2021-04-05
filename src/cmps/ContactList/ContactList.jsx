import './ContactList.scss'
import { ContactPreview } from '../ContactPreview';

export const ContactList = ({ contacts, onSelectContact }) => {
    return (
        <ul className='contact-list'>
            {contacts.map(contact => <ContactPreview contact={contact} onSelectContact={onSelectContact} key={contact._id} />)}
        </ul>
    )
}

