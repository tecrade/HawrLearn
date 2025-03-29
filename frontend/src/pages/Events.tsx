import React from 'react'
import EventBanner from '../components/EventBanner'
import '../styles/Event.css'
import '../styles/EventGrid.css'
import EventsGrid from '../components/EventGrid'
import { EventsCarousel } from '../components/EventsCarousel'


function Events() {
  return (
    <div className='eventpage'>
      <EventBanner/>
      <EventsGrid/>
      <EventsCarousel/>
    </div>
  )
}

export default Events