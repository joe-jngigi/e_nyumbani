import React, { useState, useRef, useEffect } from 'react'
import { FaBars} from 'react-icons/fa'
import { links, social } from './data'
import './Navbar.css'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)

   const linksConatinerRef = useRef(null)
   const linksRef = useRef(null)

   useEffect(() =>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    console.log(linksHeight)
    if(showLinks){
        linksConatinerRef.current.style.height = `${linksHeight}px`
    }else{
        linksConatinerRef.current.style.height = '0px'

    }
   },[showLinks])

    return(
    <>
    <nav>
    <div className="nav-center">
        <div className="nav-header">
           {/** <img src='' alt="logo" />*/}
            <h2>acherOps Inc.</h2>

            <button className='nav-toggle' onClick={()=>(
                 /**console.log(!showLinks) = true */
                setShowLinks(!showLinks)
                
            )}>
                
                <FaBars />
            </button>
        </div>

        <div className='links-container' ref={linksConatinerRef}>
                <ul className="links" ref={linksRef}>
                   {
                    links.map((link) =>{
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
        <ul className="social-icons">
            {
                social.map((socLink) =>{
                    const{id, url, icon} = socLink
                    return(
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    </nav>
    </>
    )
}
export default Navbar