import style from './ProfileBar.module.css'
import ProfileBar__ToggleMenu from '@/app/components/ProfileBar__ToggleMenu'
import SignOutLink from '@/app/components/SignOutLink'
import Navbar from '@/app/components/NavBar'
import SortingOptions from '@/app/components/SortingOptions'


import {Session, getServerSession} from 'next-auth'
import { authOptions } from '@/lib/authOptions'

const ProfileBar = async () => {

    const session = await getServerSession(authOptions)

    return (
        <div className={`${style.ProfileBar__Body} border shadow`}>
            <div className={`${style.ProfileBar__TextCol}`}>
                
                <img src={`${session?.user?.image}`} className={`${style.ProfileBar__Icon}`}></img>
                
                <div className={`${style.ProfileBar__TextRow}`}>
                    <span className={`${style.ProfileBar__Text_SmallLink}`}>user settings</span>
                    <SignOutLink className={style.ProfileBar__Text_SmallLink} labelText='logout'/>
                </div>
            </div>
            
            <ProfileBar__ToggleMenu>
                
                <Navbar/>
                <SortingOptions/>
            </ProfileBar__ToggleMenu>
        </div>
    )
}

export default ProfileBar