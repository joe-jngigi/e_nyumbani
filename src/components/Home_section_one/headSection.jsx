import './headSection.css'
import lux_img from '../../resources/luxuryproperty.jpg'
import prop_img from '../../resources/largepropertysale.jpg'
const HeadSec = () =>{
    return(
        <section className = 'headingSection'>
        <div className="mainsection cent-container">
            <article className="content">
                <h2 >Perfect vacation home 
                    <br />
                    <div className="underline"></div>
                    Vacation | Home | Rent 
                </h2>
                <p>
                    Thousands of travelers are banking on your vacation
                    rental for their next vacation. Help us help them find
                    it. Getting started is easy! We’ll be with you every 
                    step of the way.
                </p>
                <a href="/" className="btn">Check out available</a>
            </article>
            <article className="img-container">
                <img src={lux_img}  alt="A luxury home" className='main-img' />
                <img src={prop_img} alt='person working' className='accent-img' />
            </article>
        </div>
        </section>
    )
}
export default HeadSec