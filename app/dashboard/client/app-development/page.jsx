import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import AppDevelopmentCmp from '../../dashboardComponent/appDevelopment/page'

export default function page () {
  return (
    <div className='section_space max-h-screen overflow-hidden overflow-y-auto'>
      <Topbar
        title='App Development'
        des='Manage app development projects from start to finish. Coordinate updates, address client feedback, and ensure timely delivery of high-quality applications.'
      />

      <AppDevelopmentCmp />
    </div>
  )
}
