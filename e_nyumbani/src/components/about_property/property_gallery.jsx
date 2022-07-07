import React from 'react'
import { Link } from 'react-router-dom'
import './about_property.css'
import galleryimg from '../../resources/luxuryproperty.jpg'
function Propertygallery() {
  return (
    <section className="p-gallery">
      <main className="cent-container main-gallery py-1">
         <article>
           <h3>Meru General resort</h3>
            <Link to = '#'>Location</Link>
         </article>
          <div className="photo-g">
            <div className="img-1">
              <div className='f-img'>
                <img src={galleryimg} alt="house" />
              </div>
            </div>
            <div className="img-2">  
              <div className="sect-1">
                <div className='div'><img src={galleryimg} alt="house" /></div>
                <div className='div'><img src={galleryimg} alt="house" /></div>
              </div>
              <div className="sect-1">
                <div className='div'><img src={galleryimg} alt="house" /></div>
                <div className='div'><img src={galleryimg} alt="house" /></div>
              </div>
            </div>
          </div>
          <div className="view-more">
            <Link to = '#' className="btn">View more images</Link>
          </div>
          <hr />
      </main>
    </section>
  )
}

export default Propertygallery