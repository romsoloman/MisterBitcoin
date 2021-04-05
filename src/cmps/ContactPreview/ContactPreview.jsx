import './ContactPreview.scss'

export const ContactPreview = ({ contact, onSelectContact }) => {
    const random = parseInt(Math.random() * 100) + 1

    return (
        <li className='contact-preview' onClick={() => onSelectContact(contact._id)}>
            <img src={`https://randomuser.me/api/portraits/men/${random}.jpg`} alt="" />
            <h5>{contact.name}</h5>
        </li>
    )
}

