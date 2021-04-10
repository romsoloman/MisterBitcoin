
import { Component } from 'react';
import bitcoinService from '../../services/bitcoinService';
import './HomePage.scss'
import { connect } from 'react-redux';
import { loadUser } from '../../store/actions/userActions';
import { MovesList } from '../../cmps/MovesList/MovesList';

export class _HomePage extends Component {
    state = {
        currBtcRate: null,
        currUSDBTC: null,
    }
    componentDidMount() {
        this.props.loadUser()
        setTimeout(() => {
            this.loadBtcRate()
            this.loadUSDBTC()
        }, 50)
    }
    loadBtcRate = async () => {
        const currBtcRate = await bitcoinService.getRate(this.props.user.coins);
        this.setState({ currBtcRate })
    }
    loadUSDBTC = async () => {
        const currUSDBTC = await bitcoinService.getUSDBTC();
        this.setState({ currUSDBTC })
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
        const { currBtcRate, currUSDBTC } = this.state;
        if (!user) return <div>loading...</div>;
        return (
            user && <div className='home-page'>
                <div className="user-details">
                    <div className="user-name">
                        <h1> Hello, {user.name} </h1>
                    </div>
                    <div className="user-balance">
                        <div className="curr-balance">
                            <h4>current balance</h4>
                            <h3>BTC: <span>{currBtcRate}</span></h3>
                            <h3>USD: <span>{this.currentCurrency}</span></h3>
                        </div>
                        <div className="curr-btc">
                            <h4>current btc usd</h4>
                            <h3>${currUSDBTC}</h3>
                        </div>
                    </div>
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