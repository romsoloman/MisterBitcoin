
import { Component } from 'react';
import userService from '../../services/userService';
import bitcoinService from '../../services/bitcoinService';

import './HomePage.scss'

export class HomePage extends Component {
    state = {
        user: null,
        currBtcRate: null,
    }
    componentDidMount() {
        this.loadUser();
    }
    loadUser = async () => {
        const user = await userService.getUser();
        this.setState({ user }, () => {
            this.loadBtcRate();
        })
    }
    loadBtcRate = async () => {
        const currBtcRate = await bitcoinService.getRate(this.state.user.coins);
        this.setState({ currBtcRate })
    }

    render() {
        const { user, currBtcRate } = this.state;
        return (
            user && <div className='home-page'>
                <h1> Hello {user.name} </h1>
                <h3><span>💵</span> Coins: {user.coins}</h3>
                <h3><span>🪙</span> BTC: {currBtcRate}</h3>
            </div>
        )
    }
}
