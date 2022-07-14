import React from 'react'
import { Link } from 'react-router-dom'
import {ListMenuPanel, PropertiesList} from '../utilsActions/imports'
import './property_listing.css'
function HeadProperty() {
  return (
    <section title = 'about_product' className="mainHeadList py-3">
        <main className="cent-container">
            <h2>Property Listing</h2>
            <div className="list-cont">
              <ListMenuPanel/>
              <PropertiesList/>
            </div>
        </main>
    </section>
  )
}

export default HeadProperty