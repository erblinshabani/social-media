import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase/firebase'
import '../../styles/sidebar.css'

export const Sidebar = () => {
    const [user] = useAuthState(auth);

    const showSidebar = useSelector(state => state.sidebar.value.showSidebarVal)

    return (
        <div className={`sidebar ${showSidebar === true && "sidebarActive"}`}>
            <div className="sidebar-top">
                <div className="backgroundImage" style={{ backgroundImage: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXA9_txrlFMWTcfom1dKGJaux0lumISSX2g&usqp=CAU)' }}></div>
                    <img src={user?.photoURL} alt={user?.displayName}/>
                    <h2 style={{ textAlign: "center" }}>{user?.displayName}</h2>
                    <h4 style={{ textAlign: "center" }}>{user?.email}</h4>
            </div>
            <div className="sidebar-bottom">
                <h2>Sidebar</h2>
                <ul>
                    <li>
                        <span>#</span>Front End</li>
                    <li>
                        <span>#</span>Back End</li>
                    <li>
                        <span>#</span>Software Enginner</li>
                    <li>
                        <span>#</span>Designer</li>
                </ul>
            </div>
        </div>
    )
}