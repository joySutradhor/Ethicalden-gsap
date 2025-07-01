import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import UiuxCmp from '../../dashboardComponent/clientCmp/uiUxCmp/page'

export default function page () {
  return (
    <div className='section_space'>
      {' '}
      <Topbar
        title='Ui-Ux Design'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <UiuxCmp />
    </div>
  )
}
