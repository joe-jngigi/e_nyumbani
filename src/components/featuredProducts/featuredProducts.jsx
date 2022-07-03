import { Error, Loading } from "../utilsActions/imports"
import { products_url } from "../../data"
import './featuredProducts.css'
const FeaturedProducts = () =>{
    return(
        <main className = 'wrap-around '>
            <div className='cent-container'>
                <div className="title">
                    <h2>Featured Homes</h2>
                    <div className="underline"></div>
                </div>
                <Loading/>
                <Error/>
                <a href="#" className="btn">All featured homes</a>
            </div>
        </main>
    )
}
export default FeaturedProducts