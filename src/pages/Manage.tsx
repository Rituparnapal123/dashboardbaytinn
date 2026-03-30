// import React from 'react'

import { IoIosEye } from "react-icons/io"
import { IoIosNotifications} from "react-icons/io"
import { IoIosSearch } from "react-icons/io"
import { IoMdSettings } from "react-icons/io"

import RightTopBar from "../assets/components/layouts/RightTopBar"
import TableTopRow from "../assets/components/layouts/TableTopRow"
import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


// import Leftmenu from "../assets/components/layouts/Leftmenu"

const Manage = () => {
  return (
    <>
        {/* Manage */}

        {/* <Leftmenu /> */}
        <RightTopBar
        title='VPP Request'
        Searchicon={IoIosSearch}
        Notification={IoIosNotifications}
        SettingGear={IoMdSettings}
        />

        <TableTopRow 
            tabTopSearch 
            tabTopRole
            tabTopPageSize
            tabTopReset
        />

        <section className="vpp-request-table-sec">
            {/* <h1>VPP Request</h1> */}
            <div className="table-responsive custom-table table-design">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>6</td>
                        <td>Kalyan</td>
                        <td>Dutta</td>
                        <td>ithelp@baytinn.com</td>
                        <td>N/A</td>
                        <td>guest</td>
                        <td>Wed Dec 11 2024 07:39:20</td>
                        <td>N/A</td>
                        <td>
                          <span className="tick-icon"><FaCheck /></span>
                          <span className="delete-icon mx-3"><RxCross2 /></span>
                          <span className="view-icon"><Link to="/vpp-request-detail"><IoIosEye /></Link></span>
                        </td> 
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>Kalyan</td>
                        <td>Dutta</td>
                        <td>ithelp@baytinn.com</td>
                        <td>N/A</td>
                        <td>guest</td>
                        <td>Wed Dec 11 2024 07:39:20</td>
                        <td>N/A</td>
                        <td>
                          <span className="tick-icon"><FaCheck /></span>
                          <span className="delete-icon mx-3"><RxCross2 /></span>
                          <span className="view-icon"><Link to="/vpp-request-detail"><IoIosEye /></Link></span>
                        </td> 
                    </tr>

                </tbody>
            </table>
        </div>
        </section>
       
    </>
  )
}

export default Manage