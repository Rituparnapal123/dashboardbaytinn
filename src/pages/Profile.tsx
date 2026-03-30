// import React from 'react'

import { IoIosNotifications, IoIosSearch, IoMdSettings } from "react-icons/io"
import RightTopBar from "../assets/components/layouts/RightTopBar"
import { ImagePath } from "../theme/ImagePath"
import { MdEdit } from "react-icons/md"
import TabCommon from "../assets/components/layouts/TabCommon"
import PersonalTabForm from "../assets/components/layouts/PersonalTabForm"
import SecurityTab from "../assets/components/layouts/SecurityTab"


const tabs = [
    { label: "Personal Info", content: <PersonalTabForm /> },
    { label: "Security", content: <SecurityTab /> },
    { label: "Logout", content: "Logout" },
    { label: "Delete Account", content: "Delete Account" },
  ];

const Profile = () => {
  return (
    <>
        {/* Profile */}
        <RightTopBar 
            title="Profile" 
            Searchicon={IoIosSearch} 
            Notification={IoIosNotifications} 
            SettingGear={IoMdSettings} 
        />    

        <section className="profile-admin-sec mb-32">
            <div className="adminBox">
                <div className="adminPic">
                    <img src={ImagePath.ProfileAdminPic} alt="AdminPic" />
                    <span className="edit-icon"><MdEdit /></span>
                </div>
                <div className="adminBottom text-center">
                    <h3>admin admin</h3>
                </div>
            </div>
        </section>

        <section className="profile-tab-sec">
            <TabCommon tabs={tabs} tabDesignColor="greenTab" />;
        </section>

    </>
    
  )
}

export default Profile