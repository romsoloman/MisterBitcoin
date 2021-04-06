import { Link } from 'react-router-dom'
import './AppHeader.scss'

export const AppHeader = (props) => {

    return (
        <div className='app-header'>
            <div className="logo">
                <h1>MisterBitcoin</h1>
            </div>
            <nav className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/statistics">Statistics</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
