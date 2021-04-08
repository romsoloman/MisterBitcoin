
import './MovesList.scss'
var moment = require('moment');

function formattedTime(time) {
    return moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a");
}
function formattedCurrency(amount) {
    return amount.toLocaleString('en-US', {
        style: "currency",
        currency: 'USD',
        minimumFractionDigits: 2
    });
}
export const MovesList = ({ moves }) => {
    if (!moves) document.location.reload();
    return (
        moves && <ul className='moves-list'>
            {moves.map(move => {
                return (<li key={move.toId}>
                    <p>{move.to}</p>
                    <p>At: {formattedTime(move.at)}</p>
                    <p>Amount: {formattedCurrency(move.amount)}</p>
                </li>)
            })}
        </ul>
    )
}

