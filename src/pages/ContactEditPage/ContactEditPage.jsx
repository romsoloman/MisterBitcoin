
import { Component } from 'react'
import { connect } from 'react-redux';
import contactService from '../../services/contactService';
import { saveContact } from '../../store/actions/contactActions'

import './ContactEditPage.scss'

export class _ContactEditPage extends Component {
    state = {
        contact: null,
        errMsg: '',
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        try {
            const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
            this.setState({ contact })
        } catch (err) {
            this.setState({ errMsg: 'contact Not Found' })
        }
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    onSaveContact = async (ev) => {
        ev.preventDefault();
        await this.props.saveContact({ ...this.state.contact })
        this.props.history.push('/contacts');
    }
    closeEdit = () => {
        this.props.history.push('/contacts')
    }
    render() {
        const { contact } = this.state;
        return (
            contact && <div className='edit-page'>
                <header>
                    <button onClick={this.closeEdit} className='exit-btn'>Back</button>
                </header>
                <form onSubmit={(ev) => ev.preventDefault()}>
                    <main>
                        {contact._id ? <img src={contact.imgUrl} alt="" /> : <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />}
                        <input type="text" id="name" name="name" value={contact.name} onChange={this.handleChange} placeholder="Name" />
                        <input type="email" id="email" name="email" value={contact.email} onChange={this.handleChange} placeholder="Email" />
                        <input type="text" id="phone" name="phone" value={contact.phone} onChange={this.handleChange} placeholder="Phone" />
                        <button onClick={this.onSaveContact}>Save</button>
                    </main>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    saveContact
}

export const ContactEditPage = connect(null, mapDispatchToProps)(_ContactEditPage)
