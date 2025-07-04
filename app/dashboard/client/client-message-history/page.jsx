import React from 'react'
import ClientMessageHistory from '../../dashboardComponent/clientCmp/ClientMessageHistory/ClientMessageHistory'
import Topbar from '../../dashboardComponent/topbar'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Message History'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />

      {/* client message history */}
      <ClientMessageHistory />
    </div>
  )
}
