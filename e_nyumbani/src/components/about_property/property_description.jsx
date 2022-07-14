import React from 'react'
import Bookingcard from '../utilsActions/booking_card'
import {Link} from 'react-router-dom'
import { ownerInfo,propertyFeatures,} from '../../data'
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
            <div className='p-a'>
                <h3><span>/</span>&nbsp;Features</h3>
                <div className="border"></div>
                <h4>We offer the following amenities:</h4>
                <article className='p-amenities'>
                {
                    propertyFeatures.map((listFeature) =>{
                        const {id, heading,item1} = listFeature
                        return(
                            
                            <div key={id}>
                               <h5><input type="checkbox" name="" id="" />{heading}</h5>
                                <ul className="amenities">
                                     
                                    {
                                        Object.keys(item1).map((key) =>{
                                            console.log(key)
                                            console.log(item1[key])
                                            return(
                                                    <li> {[ item1[key]]}</li>
                                            );
                                        })
                                    }   
                                </ul>                   
                            </div>
                            
                        )
                    })
                }
                </article>
            </div>

            <div className="p-b my-3">
                <h3><span>/</span>&nbsp;Reserve a place</h3>
                <div className="border"></div>
                <h4>Reserve yourself the place to feel at home</h4>
                <Bookingcard/>
            </div>

            <div className="owners py-2">
            <h3><span>/</span>&nbsp;About host</h3>
            <div className="border"></div>
            {
                ownerInfo.map((owner) =>{
                    const{id,name,about,disclaimer,review_count,identity,phone_number,email,whatsapp} = owner
                    return(
                        <div key={id} className="o-info">
                            <div className="host-about p-2">
                                <span className='host-heading'>
                                <Link to = '#' className='login-btn'>
                                    icon
                                </Link>
                                <div className="username">
                                    <h4>{name}</h4>
                                    <span>{identity}</span>
                                </div>
                                </span>
                                <p className='about'>{about}</p>
                                <span>
                                    <p className="user-review">{review_count} Reviews</p>
                                </span>
                            </div>
                            <div className="host-contact p-2">
                                <h5>GET IN TOUCH WITH THE OWNER</h5>
                                <div className='contact'>
                                    <label htmlFor="phone">Call through</label>
                                    <p>{phone_number}</p>
                                    <label htmlFor="whatsapp">Whatsapp business</label>
                                    <p>{whatsapp}</p>
                                    <label htmlFor="email">Email through</label>
                                    <p>{email}</p>
                                </div>
                                <p className='disclaimer'>{disclaimer}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="maps">

            </div>
        </main>
    </section>
  )
}

export default PropertyDesc                                