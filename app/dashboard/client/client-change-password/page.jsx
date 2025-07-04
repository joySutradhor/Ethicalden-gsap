import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import ClientChangePassword from '../../dashboardComponent/clientCmp/clientChangePassword/ClientChangePassword'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Change Your Passowrd'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <ClientChangePassword/>
    </div>
  )
}
