import './Chart.scss';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { CChart } from '@coreui/react-chartjs';



export const Chart = ({ volume, marketPrice }) => {
    const getVolume = () => {
        return volume.map(v => v.y)
    }
    const getMarketPrice = () => {
        return marketPrice.map(m => m.y)
    }
    return (
        < div className='chart' >
            <div className="market-price">
                <h1>Market Price</h1>
                <CChart
                    type="line"
                    datasets={[
                        {
                            label: '2020',
                            backgroundColor: 'rgba(0, 128, 0, 0.352)',
                            borderColor: 'black',
                            pointBackgroundColor: 'white',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255,99,132,1)',
                            tooltipLabelColor: 'rgba(255,99,132,1)',
                            data: getMarketPrice()
                        }
                    ]}
                    options={{
                        aspectRatio: 4.0,
                        tooltips: {
                            enabled: true
                        }
                    }}
                />
                {/* <Sparklines data={getMarketPrice()}>
                                <SparklinesLine color="green" />
                            </Sparklines> */}
            </div>
            <div className="confirmed-transactions">
                <h1>Confirmed Transactions</h1>
                {/* <Sparklines data={getVolume()}>
                    <SparklinesLine color="blue" />
                </Sparklines> */}
                <CChart
                    type="line"
                    datasets={[
                        {
                            label: '2020',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            pointBackgroundColor: 'rgba(255,99,132,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255,99,132,1)',
                            tooltipLabelColor: 'rgba(255,99,132,1)',
                            data: getVolume()
                        }
                    ]}
                    options={{
                        aspectRatio: 4.0,
                        tooltips: {
                            enabled: true
                        }
                    }}
                />
            </div>
        </div >
    )
}

