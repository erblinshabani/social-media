import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase/firebase"
import '../../styles/profile.css'
import { useDocumentTitle } from "../../components/useDocumentTitle"

const Profile = () => {
    const [user] = useAuthState(auth)   
    
    useDocumentTitle("Profile")

    return (
        <div className="profile">
            <div className="user-profile">
                <img src={user?.photoURL} alt={user?.displayName} />
                <div className="user-profile-info">
                    <h2>{user?.displayName}</h2>
                    <h3>{user?.email}</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile