
import { Component } from 'react'
import { Chart } from '../../cmps/Chart'
import bitcoinService from '../../services/bitcoinService';
import './StatisticPage.scss'

export class StatisticPage extends Component {
    state = {
        marketPrice: null,
        volume: null,
    }
    componentDidMount() {
        this.loadMarketPrice();
    }
    loadMarketPrice = async () => {
        const marketPrice = await bitcoinService.getMarketPrice();
        this.setState({ marketPrice }, () => {
            this.loadVolume();
        });
    }
    loadVolume = async () => {
        const volume = await bitcoinService.getConfirmedTransactions();
        this.setState({ volume });
    }

    render() {
        const { marketPrice, volume } = this.state;
        return (
            (volume && marketPrice) && <div className='statistic-page'>
                <Chart marketPrice={marketPrice} volume={volume} />
            </div>
        )
    }
}
