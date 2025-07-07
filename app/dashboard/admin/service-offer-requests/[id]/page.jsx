
import ServiceDetailsCmp from '@/app/dashboard/dashboardComponent/adminCmp/serviceDetails/ServiceDetailsCmp'
import Topbar from '@/app/dashboard/dashboardComponent/topbar'
import React from 'react'

export default function page () {
  return (
    <div className='section_space'>
      {' '}
      <Topbar
        title='Service Details Page'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <ServiceDetailsCmp />
    </div>
  )
}
