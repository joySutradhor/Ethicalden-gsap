import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import ClientCreateServiceOffer from '../../dashboardComponent/clientCmp/clientCreateServiceOffer/ClientCreateServiceOffer'

export default function page () {
  return (
    <section className='section_space'>
      <Topbar
        title='Client service Overview'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
     

      {/* Client Create Service Offer */}
      <div>
        <ClientCreateServiceOffer/>
      </div>
    </section>
  )
}
