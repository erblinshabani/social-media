import '../../styles/navbar.css'
import { createContext, useState } from "react";
import { Hamburger } from './right/Hamburger'; 
import { Left } from './Left';
import { ShowRightNav } from './right/ShowRightNav'  

export const NavbarContext = createContext()

export const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="nav">
            <NavbarContext.Provider value={{ showLinks, setShowLinks }}>
                <Left />
                <ShowRightNav />
                <Hamburger />
            </NavbarContext.Provider>
        </div>
    )
}