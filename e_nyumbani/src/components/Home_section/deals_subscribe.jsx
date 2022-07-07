import React from 'react'
import { Link } from 'react-router-dom'
function DealSect() {
  return (
    <section className='deal-sect my-3'>
       <main className="sect-deal cent-container">
        <div className="head-sect">
            <h3>Get a 20% off when you share our services</h3>
            <div className="share-icon">
              <div className="main-icon">Icon</div>
              <div className="main-icon">Icon</div>
              <div className="main-icon">Icon</div>
              <div className="main-icon">Icon</div>
            </div>
            
        </div>
        <div className="subscribe">
            <input className='input' type="email" placeholder='Subscribe to our news letter' />
            <Link to = '#' className='btn'>Subscribe</Link>
        </div>
       </main>
    </section>
  )
}

export default DealSect
