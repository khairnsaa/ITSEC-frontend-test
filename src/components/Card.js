import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({title, content, icon}) => {
    return (
        <div className="card-container">
            <FontAwesomeIcon icon={icon} />
            <p>{title}</p>
            <h3>{content}</h3>
        </div>
    );
}
 
export default Card;