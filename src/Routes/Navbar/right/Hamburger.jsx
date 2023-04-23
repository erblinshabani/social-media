import { useContext } from "react"
import { useDispatch } from "react-redux";
import { showSidebar } from "../../../redux/sidebar";
import { NavbarContext } from "../Navbar"

export const Hamburger = () => {
    const {showLinks, setShowLinks} = useContext(NavbarContext);

    const dispatch = useDispatch()

    const handleClick = () => {
        setShowLinks(!showLinks)
        dispatch(showSidebar({ showSidebarVal: false }))
    }


    window.addEventListener('scroll', () => {
        if(window.scrollY >= 180) {
            setShowLinks(false)
            dispatch(showSidebar({ showSidebarVal: false }))
        }
    })

    return (
        <div className={`hamburger ${showLinks && "hamburgerActive"}`} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}