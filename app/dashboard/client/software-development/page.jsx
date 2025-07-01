import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import SoftwareDevelopmentCmp from '../../dashboardComponent/clientCmp/softwareDevelopmentCmp/SoftwareDevelopmentCmp'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Software Development'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <SoftwareDevelopmentCmp />
    </div>
  )
}
