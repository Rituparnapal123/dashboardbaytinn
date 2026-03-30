// import React from 'react'

// import { Link } from "@mui/material"
import { ImagePath } from "../../../theme/ImagePath"
import { NavLink } from "react-router-dom"





// import navlogo from "../assets/images/nav-logo.png";


const Leftmenu = () => {
    return (
        <>
        {/* Leftmenu */}
        <div className="leftMenuBar">
            <div className="leftMenuLogo"><img src={ImagePath.NavLogo} alt="Navlogo" /></div>
            <div className="leftMenuAdmin">
                <div className="leftMenuAdminPic"><img src={ImagePath.AdminPic} alt="AdminPic" /></div>
                <div className="leftMenuAdminContent">
                    <h6>Admin admin</h6>
                    <p>Administrator</p>
                </div>
            </div>
            <div className="leftMenuBody">
                <ul>
                    <li><NavLink to="/dashboard"><span><img src={ImagePath.NavIcon1} alt="NavIcon1" /></span> Dashboard</NavLink></li>
                    <li><NavLink to="/vpp-request"> <span><img src={ImagePath.NavIcon2} alt="NavIcon2" /></span> VPP Request</NavLink></li>
                    <li><NavLink to="/manage"><span><img src={ImagePath.NavIcon3} alt="NavIcon3" /></span> Manage</NavLink></li>
                    <li><NavLink to="/subscription"><span><img src={ImagePath.NavIcon4} alt="NavIcon4" /></span> Subscription</NavLink></li>
                    <li><NavLink to="/properties"><span><img src={ImagePath.NavIcon5} alt="NavIcon5" /></span> Properties</NavLink></li>
                    <li><NavLink to="/profile"><span><img src={ImagePath.NavIcon5} alt="NavIcon5" /></span> Profile</NavLink></li>
                    <li><NavLink to="/profilereservation"><span><img src={ImagePath.NavIcon4} alt="Logout" /></span> Profile - Reservation</NavLink></li>
                    <li className='navlogout'><NavLink to="/login"><span><img src={ImagePath.Logout} alt="Logout" /></span> Logout</NavLink></li>
                </ul>
            </div>
            <div className="leftMenuFooter">
                {/* <Button title="Logout" btnonClick={() => {console.log("Logout")}} btnColor="secondary" /> */}
                <p>Copyright © 2025 All rights reserved. Developed By weavers-web</p>
            </div>

        </div>
        </>
    )
}

export default Leftmenu
