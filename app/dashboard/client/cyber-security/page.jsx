import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import CyberSecurityCmp from '../../dashboardComponent/clientCmp/cyberSecuirityCmp/page'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Cyber Security'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <CyberSecurityCmp />
    </div>
  )
}
