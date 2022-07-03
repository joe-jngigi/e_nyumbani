import { Error, Loading } from "../utilsActions/imports"
import { Link } from "react-router-dom"
import { products_url } from "../../data"
import './featuredProducts.css'
const FeaturedProducts = () =>{
    return(
        <section className = 'wrap-around py-5'>
            <div className='cent-container'>
                <div className="title">
                    <h2>Featured Homes</h2>
                    <div className="underline"></div>
                </div>
                <h3>All products will be appearing soon. Please be patient
                    as we work on intergrating the databases and the back-end...
                </h3>
                <Loading/>
                <Error/>
                <div className="Link">
                    <Link to = '#' className="btn">All featured homes</Link>
                </div>
            </div>
        </section>
    )
}
export default FeaturedProducts