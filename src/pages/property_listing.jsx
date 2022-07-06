import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ListingHeader } from '../components/utilsActions/imports'
import SingleProperty from './single_property'

function PropertyList() {
  return (
    <wrapper>
    <ListingHeader/>
    </wrapper>
  )
}

export default PropertyList