import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faGripHorizontal, 
    faEnvelope, 
    faPaintBrush, 
    faGripVertical, 
    faTableColumns, 
    faObjectUngroup, faSquare, faList, faToggleOn, faFolderClosed, faTable, faLocationDot
} from '@fortawesome/free-solid-svg-icons';

const SideMenu = () => {
    return (
        <div className="side-menu-container">
            <div className="side-menu">
                <FontAwesomeIcon icon={faGripHorizontal} />
                <span> Dashboard</span>
            </div>
            <div className="side-menu">
                <FontAwesomeIcon icon={faObjectUngroup} />
                <span> Form</span>
            </div>
            <div className="side-menu">
                <FontAwesomeIcon icon={faEnvelope} />
                <span> Inbox</span>
            </div>
            <div className="side-menu">
                <FontAwesomeIcon icon={faSquare} />
                <span> Stepper</span>
            </div>
            <div className="side-menu">
                <FontAwesomeIcon icon={faPaintBrush} />
                <span> Ui Element</span>
            </div>
            <div className="side-menu">
                <FontAwesomeIcon icon={faTableColumns} />
                <span> Layout</span>
            </div>
            <div className="side-menu">
                <FontAwesomeIcon icon={faGripVertical} />
                <span> Icons</span>
            </div>
            <p>Layout</p>
            <div className="side-menu">
                <FontAwesomeIcon icon={faFolderClosed} />
                <span> Subheader</span>
            </div>
            <div className="side-menu">
                <FontAwesomeIcon icon={faList} />
                <span> Builder</span>
            </div>
            <div className="side-menu">
                <FontAwesomeIcon icon={faToggleOn} />
                <span> General</span>
            </div>
            <p>Components</p>
            <div className="side-menu">
                <FontAwesomeIcon icon={faTable} />
                <span> Tables</span>
            </div>
            <div className="side-menu">
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Maps</span>
            </div>
        </div>
    );
}
 
export default SideMenu;