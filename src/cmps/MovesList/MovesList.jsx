
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
            <li><i className="fas fa-recycle"></i>Moves History</li>
            {moves.map(move => {
                return (<li key={move.toId}>
                    <div className="contact-transaction">
                        <span className='amount'>{formattedCurrency(move.amount)}</span> |
                        <span className='contact-name'>{move.to}</span>
                    </div>
                    <p className='status'>status:<span>approve</span></p>
                    <p className='at'>{formattedTime(move.at)}</p>
                </li>)
            })}
        </ul>
    )
}

