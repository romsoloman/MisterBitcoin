import './Chart.scss';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export const Chart = ({ volume, marketPrice }) => {
    const getVolume = () => {
        return volume.map(v => v.y)
    }
    const getMarketPrice = () => {
        return marketPrice.map(m => m.y)
    }
    return (
        < div className='chart' >
            <div className="confirmed-transactions">
                <h1>Confirmed Transactions</h1>
                <Sparklines data={getVolume()}>
                    <SparklinesLine color="blue" />
                </Sparklines>
            </div>
            <div className="market-price">
                <h1>Market Price</h1>
                <Sparklines data={getMarketPrice()}>
                    <SparklinesLine color="green" />
                </Sparklines>
            </div>
        </div >
    )
}

