import { faBell, faEnvelope, faList, faSearch, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({handleOpen}) => {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const openSearch = () => {
        document.querySelector('.search-input').classList.toggle('show')
    }

    const openDropdown = () => {
        if(open) setOpen(false)
        else setOpen(true)
    }

    const logoutUser = () => {
        Cookies.remove('username')
        Cookies.remove('password')
        
        navigate('/login')
    }


    return (
        <nav>
            <div className="search">
                <div className="open-menu" onClick={handleOpen}>
                    <FontAwesomeIcon icon={faList} />
                </div>
                <input type="text" name="search" className="search-input" placeholder="search" />
                <div className="open-search" onClick={openSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <div className="profile-notif-message">
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="message-container">
                    <div className="flags"></div>
                    <p>English</p>
                </div>
                <div className="profil-container">
                    <div className="profil-picture" onClick={openDropdown}></div>
                    {
                        open &&
                        <div className="profil-popup" onClick={logoutUser}>
                            <FontAwesomeIcon icon={faSignOut} />
                            <span>Logout</span>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;