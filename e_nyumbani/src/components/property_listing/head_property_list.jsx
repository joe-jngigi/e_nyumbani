import React from 'react'
import { Link } from 'react-router-dom'
import './property_listing.css'
function HeadProperty() {
  return (
    <section title = 'about_product' className="mainHeadList">
        <main className="cent-container">
            <h2>Property Listing</h2>
            <div className="list-cont">
              <article className="menu-panel">
                <div className="liist">
                  <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                  </ul>
                </div>
              </article>
              <div className="content-panel">
                <div className="oone">
                   <Link className='btn' to = '/about_property'>View this property</Link>
                </div>
                <div className="oone">
                  
                </div>
                <div className="oone">
                  
                </div>
                <div className="oone">
                  
                </div>
                <div className="oone">
                  
                </div>
                <div className="oone">
                  
                </div>
                <div className="oone">
                  
                </div>
                <div className="oone">
                  
                </div>
                <div className="oone">
                  
                </div>
                <div className="oone">
                  
                </div>
                <div className="oone">
                  
                </div>
              </div>
            </div>
        </main>
    </section>
  )
}

export default HeadProperty