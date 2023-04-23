import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import '../styles/pageNotFound.css'

export const PageNotFound = () => {
    const [user] = useAuthState(auth)

    return (
        <div className="container" style={{ flex: user ? 0.8 : 1 }}>
            <img className="ops" src="https://cdn-icons-png.flaticon.com/512/3855/3855243.png" alt="error"/>
            <br />
            <h2>Page Not Found
                <br /> Go To Home Page By Clicking The Button "Go Home"</h2>
            <br />
            <Link to="/social-media">Go Home</Link>
        </div>
    )
}