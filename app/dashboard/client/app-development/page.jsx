import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import AppDevelopmentCmp from '../../dashboardComponent/appDevelopment/page'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='App Development'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <AppDevelopmentCmp />
    </div>
  )
}
