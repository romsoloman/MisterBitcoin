import { Link } from 'react-router-dom'
import './AppHeader.scss'

export const AppHeader = (props) => {
    const loggedinUser = JSON.parse(sessionStorage.getItem('loggedinUser'));
    return (
        <div className='app-header'>
            <div className="logo">
                <Link to="/"><h1>MisterBitcoin</h1></Link>
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

                    {loggedinUser ? <li>
                        <Link to="/signup">{loggedinUser.name}</Link>
                    </li> : <li>
                            <Link to="/signup">Sign up</Link>
                        </li>}
                </ul>
            </nav>
        </div>
    )
}

