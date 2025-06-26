import './dashboard.css'
import Sidebar from './dashboardComponent/sidebar'


// This layout overrides the root layout
export const metadata = {
  title: 'Dashboard | Barcelona Market Card',
  description: 'Private admin section'
}

export default function DashboardLayout ({ children }) {
  return (
    <html lang='en' data-arp=''>
      <body cz-shortcut-listen='true'>
        <div className='grid lg:grid-cols-[20%_80%] 2xl:grid-cols-[15%_85%] justify-between min-h-screen bg-[#131313]'>
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
