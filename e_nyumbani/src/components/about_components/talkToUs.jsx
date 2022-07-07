import React from 'react'
import './aboutComponents.css'
import {Link} from 'react-router-dom'
function Letstalk() {
  return (
    <section className='lets-talk py-1'>
        <main className="cent-container">
            <h2>Lets Talk</h2>
            <div className="underline"></div>
            <p className='p'>WONDERING HOW WE CAN HELP YOU WITH YOUR VACATION RENTALS PROBLEMS? LET'S TALK.</p>
            <div className="talk-content">
                <div className="talk p-talk">

                        <div className='main-icon'>icon</div>
                        <h3>Call us</h3>
                        <p>We are a click away. Call us directly from 
                            the website for free We are available from 
                            9 AM to 5 PM Monday through Saturday.
                        </p>

                </div>
                <div className="talk p-talk">

                        <div className='main-icon'>icon</div>
                        <h3>Chat with us</h3>
                        <p>We are a click away. Call us directly from 
                            the website for free We are available from 
                            9 AM to 5 PM Monday through Saturday.
                        </p>

                </div>
                <div className="talk p-talk">
                    <div className='main-icon'>icon</div>
                        <h3>Send us an Email</h3>
                        <p>We are always attentive. Drop us a message 
                           and we will get back to you as soon as possible.
                        </p>
                </div>
                <div className="e-talk talk p-talk my-3">
                    <h3>Leave a feedback or suggestion</h3>
                    <p>
                        We appreciate your feedbacks or suggestions. 
                        We dwell on them to know how we can better 
                        serve you.
                    </p>
                    <textarea name="" id="" cols="30" rows="10"></textarea><br />
                    <div>
                    <Link to = '#' className='btn'>Subscribe</Link>
                    </div>
                    
                </div>
            </div>
        </main>
    </section>
  )
}

export default Letstalk