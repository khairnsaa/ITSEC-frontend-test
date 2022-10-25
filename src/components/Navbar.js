import { faBell, faEnvelope, faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <nav>
            <div className="search">
                <FontAwesomeIcon icon={faList} />
                <input type="text" name="search" className="search-input" placeholder="search" />
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="profile-notif-message">
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="message-container">
                    <div className="flags"></div>
                    <p>English</p>
                </div>
                <div className="profil-container">
                    <div className="profil-picture"></div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;