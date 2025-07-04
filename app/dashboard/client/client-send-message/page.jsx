import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import ClientSendMessageCmp from '../../dashboardComponent/clientCmp/ClientSendMessageCmp/ClientSendMessageCmp'

export default function page () {
  return (
    <section className='section_space'>
      <Topbar
        title='Change Your Passowrd'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <ClientSendMessageCmp />
    </section>
  )
}
