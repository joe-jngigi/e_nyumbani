import React from 'react'
import Calendar from 'react-calendar'
function PropertyDesc() {
  return (
    <section className="property-desc">
        <main className="cent-container prop-desc">
            <div className="p-desc">
                <p>
                    Offering spacious stylish rooms and suites with one, 
                    two and three-bedroom configuration, Angsana is perf
                    ect for meetings and events of all sizes. Our resorts 
                    feature unique indoor and outdoor spaces in stunning 
                    locations coupled with a specialised Events Team and 
                    impeccable service. You will be assured of creative 
                    events and exceptional meetings.
                </p>
                <p>Highlights:
                    2 guests1 . bedroom1 . bed1 . bath
                </p>
                <hr />
            </div>
            <div className="amenities">
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
            <div className="calendar">
                <Calendar/>
            </div>
            <div className="maps">

            </div>
        </main>
    </section>
  )
}

export default PropertyDesc