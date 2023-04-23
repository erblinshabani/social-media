import { auth, provider } from '../../firebase/firebase'
import { signInWithPopup } from 'firebase/auth';
import '../../styles/login.css'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
        navigate('/social-media')
    }

    return (
        <div className="loginPage">
            <h1>Log in</h1>
            <div className='logInWith'>
                <img onClick={signInWithGoogle} title="Sign In With Gmail" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="signInWithGoogle" />
                
            </div>
        </div>
    )
}