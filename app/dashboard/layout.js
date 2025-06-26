"use client"
import './dashboard.css'
import useAuthRedirect from './dashboardComponent/hooks/useAuthRedirect'
import SidebarMain from './dashboardComponent/Sidebar/SidebarMain'

// This layout overrides the root layout
// export const metadata = {
//   title: 'Dashboard | Barcelona Market Card',
//   description: 'Private admin section'
// }

export default function DashboardLayout ({ children }) {
  useAuthRedirect()
  return (
    <html lang='en' data-arp=''>
      <body cz-shortcut-listen='true'>
        <div className='grid lg:grid-cols-[20%_80%] 2xl:grid-cols-[15%_85%] justify-between min-h-screen bg-[#131313]'>
          <SidebarMain />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
