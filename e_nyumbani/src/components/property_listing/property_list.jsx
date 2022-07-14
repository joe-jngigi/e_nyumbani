import { Link } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch,faStar} from '@fortawesome/free-solid-svg-icons'
import { propertiesCardInfo } from "../../data"
const PropertiesList = () =>{
    return(
        <div>
            
                <div  className="content-panel ">
                    {
                        propertiesCardInfo.map((cardInfo) =>{
                            const {id,image_url,location,price,pric,rating,} = cardInfo
                            return(
                                
                                <div key={id} className="productCard">
                                    <div className="cardImg">
                                        <img src={image_url} alt="modern poster"></img>
                                        <Link className='btn p-img-l' to = '/about_property'>
                                            <FontAwesomeIcon icon = {faSearch}></FontAwesomeIcon>
                                        </Link>
                                    </div>
                                    <div className="propInfo">
                                        <h4>{location}</h4>
                                        <span>
                                        <p><span>{rating}</span></p>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        </span>
                                        <h4>Usd {price}</h4>
                                    </div>
                                </div>
                               
                            )
                        })
                        
    
                    }
                </div>
             
        </div>
    )
}
export default PropertiesList