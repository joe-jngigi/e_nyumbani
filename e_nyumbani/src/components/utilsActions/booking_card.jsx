import React from 'react'
import {Calendar, } from 'react-calendar'

import Format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import DatePicker from 'react-datepicker'

import { guestCount } from '../../data'
const locales = {
    'en-US': require ('date-fns/locale/en-US')
}

const dateEvents =[{
    
}]

function Bookingcard() {
  return (
    <div className="bookings py-2">
        <div className="calendar">
            <Calendar/>
        </div>
        <div className="book p-2">
            <h3>Make a reservation here</h3>
            <div className="border"></div>
            <br />
            <div className="getGuest">
                {
                    guestCount.map((oneGuest) =>{
                        const {id, text, count,age} = oneGuest
                        return(
                            <div key={id} className="guest-c m-1">
                                <div className="g-label">
                                    <p>{text}</p>
                                    <p>{age} years</p>
                                </div>
                                <div className="count-btn">
                                    <button className="i-btn c-btn">minus</button>
                                    <div>{count}</div>
                                    <button className="i-btn c-btn">plus</button>
                                </div>    
                                  
                            </div>
                        )
                    })
                }
            </div>
            <div className="btn g-btn my-1">Reserve</div>
        </div>
    </div>
  )
}

export default Bookingcard