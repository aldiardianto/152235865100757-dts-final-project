import { Col, Row } from "react-bootstrap";
import './itemAgent.css';
export const ItemAgent = ({item}) => {
    // console.log(item)
    return (
        <article className="postcard dark blue" >
        <a className="postcard__img_link"  href="#">
        <img
                className="postcard__img"
                src={item.fullPortraitV2}
                alt={item.displayName}
            />
            
        </a>
        <div className="postcard__text">
            <h1 className="postcard__title blue">
                <a href="#">{item.displayName}</a>
            </h1>
            <div className="postcard__subtitle small">
               {item.role ? item.role.displayName:'' }
               <img className="imageRole" src={item.role.displayIcon}></img>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
                {item.description}
            </div>
            <h4 className="postcard__skils blue">
                <a href="#">Skills</a>
            </h4>
            <ul className="postcard__tagbox">
                {item.abilities.map((ability,i) =>(
                <li className="tag__item" title={ability.description}>
                    <i className="fas fa-tag mr-2"></i>
                    {ability.displayName}
                </li>
                ))}
                
                
            </ul>
        </div>
    </article>
    );
};
