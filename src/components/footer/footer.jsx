import './footer.css'
import {social} from '../../data'
const Footer = () => {
    return(
        <>
        <footer className="footerContainer">
            <section className="socialIcons py-1">
                <ul className="social-icons">
                    {
                        social.map((socLink) =>{
                            const {id, url, icon} = socLink
                            return(
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                
            </section>
            <section className="container-2">

            </section>
            <section className="container-3">

            </section>
        </footer>
        </>
    )
}
export default Footer