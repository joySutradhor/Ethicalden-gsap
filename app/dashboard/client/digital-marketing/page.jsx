import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import DigitalMarketingCmp from '../../dashboardComponent/clientCmp/digitalMarketingCmp/page'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Digital Marketing'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      {/* digital marketing */}
      <DigitalMarketingCmp />
    </div>
  )
}
