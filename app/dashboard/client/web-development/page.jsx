
import WebsiteDevelopmentCmp from '../../dashboardComponent/clientCmp/websiteDevelopmentCmp/WebsiteDevelopmentCmp'
import Topbar from '../../dashboardComponent/topbar'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Website Development'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <WebsiteDevelopmentCmp />
    </div>
  )
}
