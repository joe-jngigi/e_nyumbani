import React from 'react'
import { Link } from 'react-router-dom'
function HeadProperty() {
  return (
    <section title = 'about_product' className="mainHeadList">
        <main className="cent-container">
            <h2>Property Listing</h2>
            <Link className='btn' to = '/about_property'>View this property</Link>
        </main>
    </section>
  )
}

export default HeadProperty