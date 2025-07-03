import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import ServiceOfferRequestsCmp from '../../dashboardComponent/adminCmp/ServiceOfferRequestsCmp/ServiceOfferRequestsCmp'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Service Offer Requests'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <ServiceOfferRequestsCmp />
    </div>
  )
}
