import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import DigitalMarketingCmp from '../../dashboardComponent/clientCmp/digitalMarketingCmp/page'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Digital Marketing'
        des='Manage and track digital marketing campaigns effectively. Monitor client requests, optimize strategies, and ensure impactful online engagement.'
      />

      {/* digital marketing */}
      <DigitalMarketingCmp />
    </div>
  )
}
