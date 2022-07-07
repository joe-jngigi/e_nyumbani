import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/property',
    text: 'Property Listing',
  },

]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
]

export const affLink= [
   {
    id: 1,
    url: '#',
    text: 'Help Center',
  },
  {
    id: 2,
    url: '#',
    text: 'AirCover',
  },
    {
    id: 3,
    url: '#',
    text: 'Safety information',
  },
    {
    id: 4,
    url: '#',
    text: 'Supporting people with disabilities',
  },
    {
    id: 5,
    url: '#',
    text: 'Cancellation options',
  },
    {
    id: 6,
    url: '#',
    text: 'Our COVID-19 Response',
  },
    {
    id: 7,
    url: '#',
    text: 'Report a neighborhood concern',
  },
]

export const  aboutLink= [
   {
    id: 1,
    url: '#',
    text: 'Newsroom',
  },
  {
    id: 2,
    url: '#',
    text: 'Learn about new features',
  },
    {
    id: 3,
    url: '#',
    text: 'Letter from our founders',
  },
    {
    id: 4,
    url: '#',
    text: 'Careers',
  },
    {
    id: 5,
    url: '#',
    text: 'Investors',
  },
    {
    id: 6,
    url: '#',
    text: 'our Affiliates',
  },
]
export const  communityLink= [
   {
    id: 1,
    url: '#',
    text: 'disaster relief housing'
  },
  {
    id: 2,
    url: '#',
    text: 'Who we have sponsored',
  },
    {
    id: 3,
    url: '#',
    text: 'Supporting  the less fortunate',
  },
    {
    id: 4,
    url: '#',
    text: 'Careers',
  },
]
export const signDetails =[
  {
    id:1,
    url:'#',
    image:'#',
    text:'Login'
  },
  {
    id:2,
    url:'#',
    image:'#',
    text:'Sign Up'
  }
]
export const services = [
  {
    id: 1,
    icon: '',
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: '<GiDiamondHard />',
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon:' <GiStabbedNote />',
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]
export const faqQuestions = [
  {
    id: 1,
    title: 'My booking is confirmed, how do I contact the property owner?',
    info:
      'This website has its own internal messaging system that you can use to contact the owner of the vacation rentals you are about to book in case you have any question.'+
      'Log in to your account, search for the place you like, click on contact owner from the property page. Type in your message and send. We advise against sharing your contact details via the messaging system for security and privacy reasons.'
      +'However, once your reservation is confirmed, you will receive an email containing the details of the owner.'+
      'Check any email received from the owner, also you will be able to view the the owner’s contact from the owner’s page.'
  },
  {
    id: 2,
    title: 'How to search for a vacation rental?',
    info:
      'Go to Home and input your destination. check-in date, check-out date and the number of people you are traveling with.'
      +'Click on Search.'
      +'Upon completion of your search, you can narrow down to your need by moving the radius and/or price slider to filter the result to your preference.',
  },
  {
    id: 3,
    title: 'What payment means do you accept on e-nyumbani Lettings?',
    info:
      'We accept all major credit and/or debit cards from all countries as well as PayPal. Paying with PayPal is easy and secure. If you do not have a PayPal account yet, Please click here to sign up for one today.'+
      'You can now pay in your local currency. We have just added payments by mobile money wallets',
  },
  {
    id: 4,
    title: 'Why can'+"'"+'t I call the owner before I book?',
    info:
      'You can exchange contact details with the property owner once your booking is confirmed and you’ve paid in full. Paying and communicating only through our platform allows us to ensure that your booking payment is secured and protected in case of a claim. '
      +'If you have any questions before booking, you can send the property owner a message via the contact form on their listing. Once you’ve booked, you can discuss the rental and make arrangements for your trip by going to Reservations.'
     ,
  },
  {
    id: 5,
    title: 'Can a host cancel a confirmed booking?',
    info:
      'Yes, the host has a right to cancel a booking before check in with explanation as to why he/she can not host the guest.  The host has the final say on who and when to allow in his property. But they don' +"'"+ 't just cancel and disrupt guest' +"'"+ 's travel plans for fun, there must be a good explanation as to  the reason for cancellation.'+
      'In this case, the guest is fully refunded or offered a similar listing.'
  },
]
export const guestCount =[
  {
    id: 1,
    text: 'Adult',
    count: 0,
  },
  {
    id: 3,
    text: 'Children',
    count: 0,
  },
  {
    id: 3,
    text: 'Infants',
    count: 0,
  },
  {
    id: 4,
    text: 'Pets',
    count: 0,
  },

]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
