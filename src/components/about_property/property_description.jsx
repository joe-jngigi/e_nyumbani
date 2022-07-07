import React from 'react'
import Bookingcard from '../utilsActions/booking_card'

function PropertyDesc() {
  return (
    <section className="property-desc">
        <main className="cent-container prop-desc">
            <div className="p-desc">
                <div className="p-details p-2">
                    <p>
                    Offering spacious stylish rooms and suites with one, 
                    two and three-bedroom configuration, Angsana is perf
                    ect for meetings and events of all sizes. Our resorts 
                    feature unique indoor and outdoor spaces in stunning 
                    locations coupled with a specialised Events Team and 
                    impeccable service. You will be assured of creative 
                    events and exceptional meetings.
                    </p>
                </div>
                <div className="highlights p-2">
                    <h4>Property Highlights:
                    <br />
                    </h4>
                    <p>
                    2 guests1 . bedroom1 . bed1 . bath
                    </p>
                </div>
                <hr />
            </div>
            <div className="underline"></div>
            <div className="amenities">
                <h3>Amenities</h3>
                What this place offers
                <ul>
                    <li>Wifi</li>
                    <li>Pool</li>
                    <li>TV</li>
                    <li>Air conditioning</li>
                    <li>Hair dryer</li>
                    <li>Breakfast</li>
                    <li>Long term stays allowed</li>
                </ul>
            </div>

            <Bookingcard/>

            <div className="maps">

            </div>
        </main>
    </section>
  )
}

export default PropertyDesc