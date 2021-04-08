
import { Component } from 'react'
import { connect } from 'react-redux'
import './TransferFund.scss'
import { chargeUser, loadUser } from '../../store/actions/userActions'


export class _TransferFund extends Component {
    state = {
        coins: '',
    }
    componentDidMount() {
        this.props.loadUser();
    }
    handleChange = ({ target }) => {
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ coins: value })
    }
    onTransferCoins = async (ev) => {
        ev.preventDefault();
        await this.props.chargeUser(this.props.user, this.state.coins, this.props.contact)
        this.setState({ coins: '' })
    }
    render() {
        const { contact } = this.props;
        return (
            <article className='transfer-fund'>
                <p>Transfer Coins To {contact.name}:</p>
                <form onSubmit={(ev) => ev.preventDefault()}>
                    <div className="amount">
                        <label htmlFor="amount">Amount:</label>
                        <input type="number" id="amount" name="amount" value={this.state.coins} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.onTransferCoins}>Transfer</button>
                </form>
            </article>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {
    chargeUser,
    loadUser
}

export const TransferFund = connect(mapStateToProps, mapDispatchToProps)(_TransferFund)