import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import MaintainceAndServiceCmp from '../../dashboardComponent/clientCmp/maintainceAndServiceCmp/MaintainceAndServiceCmp'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Maintenance Support'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <MaintainceAndServiceCmp />
    </div>
  )
}
