import './footer.css'
import {social, affLink, communityLink, aboutLink} from '../../data'
const Footer = () => {
    return(
        <>
        <footer className="footerContainer">
            <div className="cent-container">
                <section className="socialIcons py-3">
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
            <section className="co-info my-3">
                <div className="cont-2">
                    <h4>Support & Contact</h4>
                    <div >
                        <ul>
                           {
                            affLink.map((link) =>{
                                const{id, url, text} = link
                                return(
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })
                           }
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="cont-2">
                    <h4>The community</h4>
                    <div >
                        <ul>
                           {
                            communityLink.map((link) =>{
                                const{id, url, text} = link
                                return(
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })
                           }
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="cont-2">
                    <h4>About us</h4>
                    <div >
                        <ul>
                           {
                            aboutLink.map((link) =>{
                                const{id, url, text} = link
                                return(
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })
                           }
                        </ul>
                    </div>
                </div>
            </section>
            <section className="container-3">
                <h5>
                    &copy;{new Date().getFullYear()}
                    <span> &nbsp;archerOps Inc.</span>
                </h5>
                <h5>&nbsp; All rights reserved. A trademark of Joe_J Inc.</h5>
            </section>

            </div>
        </footer>
        </>
    )
}
export default Footer