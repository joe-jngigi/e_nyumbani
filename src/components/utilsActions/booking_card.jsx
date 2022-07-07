import React from 'react'
import {Calendar, } from 'react-calendar'

import Format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import DatePicker from 'react-datepicker'

const locales = {
    'en-US': require ('date-fns/locale/en-US')
}

const dateEvents =[{
    
}]

function Bookingcard() {
  return (
    <div className="bookings">
        <div className="calendar">
            <Calendar/>
        </div>
        <div className="book">
            <div className="getGuest">
                {
                    
                }
            </div>
        </div>
    </div>
  )
}

export default Bookingcard