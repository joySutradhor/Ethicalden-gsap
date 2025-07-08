import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import SoftwareDevelopmentCmp from '../../dashboardComponent/clientCmp/softwareDevelopmentCmp/SoftwareDevelopmentCmp'

export default function page () {
  return (
    <div className='section_space max-h-screen overflow-hidden overflow-y-auto'>
      <Topbar
        title='Software Development'
        des='Manage software development tasks and client requests efficiently. Track progress, implement updates, and ensure high-quality, timely delivery of solutions.'
      />

      <SoftwareDevelopmentCmp />
    </div>
  )
}
