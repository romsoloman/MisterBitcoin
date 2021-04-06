import './ContactFilter.scss'
import { Component } from 'react'


export class ContactFilter extends Component {
    state = {
        name: '',
        phone: '',
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onFilter({ ...this.state })
        })
    }
    render() {
        const { name, phone } = this.state;
        return (
            <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
                <div className="name">
                    {/* <label htmlFor="name">Name</label> */}
                    <input type="text" id="name" name="name" value={name} onChange={this.handleChange} placeholder="Name" />
                </div>
                {/* <div className="phone">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" value={phone} onChange={this.handleChange} />
                </div> */}
            </form >
        )
    }
}

