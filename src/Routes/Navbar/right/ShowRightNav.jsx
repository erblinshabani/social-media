import { signOut } from "firebase/auth";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { Links } from "./Links";
import { LinksNav } from "./LinksNav";
import { NavbarContext } from "../Navbar";


export const ShowRightNav = () => {
    const [user] = useAuthState(auth);

    const { showLinks, setShowLinks } = useContext(NavbarContext);

    const navigate = useNavigate()

    const signOutUser = async () => {
        await signOut(auth);
        setShowLinks(false)
        navigate('/login');
    }

    return (
        <div className={`links ${showLinks && "showLinksActive"}`}>
                <LinksNav />
                
                <div className="onlyLinks" onClick={() => setShowLinks(false)}>
                    <Links path='/social-media' img="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home" name="HOME"/>
                    {user 
                    ? 
                    <>
                        <Links path='/page' img="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="message" name="NOTES"/>
                        {/* <Links path='/menu' img="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="message" name="MESSAGE"/> */}
                        <Links imgClass="profileImage" path='/profile' img={user ? user?.photoURL : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"} alt="user" name={user?.displayName}/>
                    </> 
                    : 
                    <Links path='/login' img="https://cdn-icons-png.flaticon.com/512/1389/1389008.png" alt="log=in" name="LOG IN"/>}
                    {user && <button onClick={signOutUser}>Sign Out</button>}
                </div>
            </div>
    )
}