import '@/app/globals.css'
import style from './layout.module.css'

import ProfileBar from '@/app/components/ProfileBar'
import NavBar from '@/app/components/NavBar'
import SortingOptions from '@/app/components/SortingOptions'

export default function RootLayout({ children, }: { children?: React.ReactNode }) {
  return (
    <div className={`${style.Page__Body}`}>
      <div className={`${style.NavContainer__Body}`}>
        <ProfileBar/>
        <NavBar classNames={"hideOnSmall"}/>
        <SortingOptions classNames={"hideOnSmall"}/>
      </div>

      <div className={`${style.ContentContainer__Body}`}>
        {children}
      </div>
    </div>
  )
} 