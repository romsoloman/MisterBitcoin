import { Link } from 'react-router-dom'
import './ContactPreview.scss'

export const ContactPreview = ({ contact }) => {
    return (
        <Link to={'/contacts/' + contact._id}>
            <li className='contact-preview'>
                {/* <img src={`https://randomuser.me/api/portraits/men/${random}.jpg`} alt="" /> */}
                <h5>{contact.name}</h5>
            </li>
        </Link>
    )
}

