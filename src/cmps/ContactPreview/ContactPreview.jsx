import { Link } from 'react-router-dom'
import './ContactPreview.scss'

export const ContactPreview = ({ contact }) => {
    return (
        <Link to={'/contacts/' + contact._id}>
            <li className='contact-preview'>
                <img src={contact.imgUrl} alt="" />
                <div className="contact-details">
                    <h3>{contact.name}</h3>
                    <p>{contact.phone}</p>
                </div>
            </li>
        </Link>
    )
}

