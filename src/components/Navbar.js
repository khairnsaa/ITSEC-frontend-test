import { faBell, faEnvelope, faList, faSearch, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({handleOpen, openDropdown, open, logoutUser}) => {

    const openSearch = () => {
        document.querySelector('.search-input').classList.toggle('show')
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
                <FontAwesomeIcon icon={faBell}/>
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="message-container">
                    <div className="flags"></div>
                    <p>English</p>
                </div>
                <div className="profil-container" onClick={openDropdown}>
                    <div className="profil-picture"></div>
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