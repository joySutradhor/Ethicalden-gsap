import React from 'react'
import Topbar from '../../dashboardComponent/topbar'

export default function page () {
  return (
    <section className='section_space'>
      <Topbar
        title='Client Dashboard Overview'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <h2 className='d_heading mb-10 text-[#a8ff57]'>
        Manage Service Requests
      </h2>
    </section>
  )
}
