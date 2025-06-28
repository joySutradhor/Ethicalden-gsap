import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import ClientManageServiceOffer from '../../dashboardComponent/clientCmp/clientManageServiceOffer/ClientManageServiceOffer'

export default function page () {
  return (
    <section className='section_space'>
      <Topbar
        title='Client manage service Offer'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <div>
        <ClientManageServiceOffer />
      </div>
    </section>
  )
}
