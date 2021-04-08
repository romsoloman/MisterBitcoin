
import { Component } from 'react';
import bitcoinService from '../../services/bitcoinService';
import './HomePage.scss'
import { connect } from 'react-redux';
import { loadUser } from '../../store/actions/userActions';
import { MovesList } from '../../cmps/MovesList/MovesList';

export class _HomePage extends Component {
    state = {
        currBtcRate: null,
        currEthRate: null,
    }
    componentDidMount() {
        this.props.loadUser()
        setTimeout(() => {
            this.loadBtcRate()
            this.loadEthRate(this.props.user.coins);
        }, 50)
    }
    loadEthRate = async (amount) => {
        let currEthRate = await bitcoinService.getEth();
        currEthRate = amount / currEthRate;
        this.setState({ currEthRate })
    }
    loadBtcRate = async () => {
        const currBtcRate = await bitcoinService.getRate(this.props.user.coins);
        this.setState({ currBtcRate })
    }
    get currentCurrency() {
        return this.props.user.coins.toLocaleString('en-US', {
            style: "currency",
            currency: 'USD',
            minimumFractionDigits: 2
        });
    }
    render() {
        const { user } = this.props;
        const { currBtcRate, currEthRate } = this.state;
        if (!user) return <div>loading...</div>;
        return (
            user && <div className='home-page'>
                <div className="user-details">
                    <h1> Hello {user.name} </h1>
                    <h3><span>💵</span> Coins: {this.currentCurrency}</h3>
                    <h3><span>🪙</span> BTC: {currBtcRate}</h3>
                    <h3><span>🪙</span> ETH: {currEthRate}</h3>
                    <MovesList moves={user.moves} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {
    loadUser,
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)