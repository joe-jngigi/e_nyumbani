import React, { useState, useRef, useEffect } from 'react'
import { FaBars} from 'react-icons/fa'
import { links} from '../../data'
import './Navbar.css'
import {Routes, Route, Link} from 'react-router-dom'

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
                                <Link to = {url}>{text}</Link>
                            </li>
                        )
                    })
                   }
                </ul>
        </div>
        <div className="log-user">
            <Link className='host' to ='/authenticate_user'>
                Become a Host
            </Link>
            <Link to = '#' className='login-btn'>
                icon
            </Link>
        </div>
    </div>
    </nav>
    </>
    )
}
export default Navbar