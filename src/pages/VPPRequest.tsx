// import React from 'react'

import { IoIosEye } from "react-icons/io"
import { IoIosNotifications} from "react-icons/io"
import { IoIosSearch } from "react-icons/io"
import { IoMdSettings } from "react-icons/io"
import RightTopBar from "../assets/components/layouts/RightTopBar"
import TableTopRow from "../assets/components/layouts/TableTopRow"
import { Link } from "react-router-dom"
// import { FaCheck } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";


// import Leftmenu from "../assets/components/layouts/Leftmenu"

const VPPRequest = () => {
  return (
    <>
        {/* VPPRequest */}
        {/* <Leftmenu /> */}
        <RightTopBar
        title='VPP Request'
        Searchicon={IoIosSearch}
        Notification={IoIosNotifications}
        SettingGear={IoMdSettings}
        />

        <TableTopRow 
            tabTopSearch 
            // TabTopRole
            tabTopPageSize
            // TabTopReset
        />

        <section className="vpp-request-table-sec">
            {/* <h1>VPP Request</h1> */}
            <div className="table-responsive custom-table table-design">
            <table className="table">
                <thead>
                    <tr>
                        <th >Id</th>
                        <th>User Id</th>
                        <th>City</th>
                        <th>Agency Name</th>
                        <th>Full Name</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>23</td>
                        <td>Casablanca</td>
                        <td>Travel journey</td>
                        <td>Simo Hamza</td>
                        <td>Broker</td>
                        <td><span className="approve-tag">approve</span></td>
                        <td>
                          <span className="view-icon"><Link to="/vpp-request-detail"><IoIosEye /></Link></span>
                          {/* <span className="tick-icon"><FaCheck /></span>
                          <span className="delete-icon"><RxCross2 /></span> */}
                        </td> 
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>17</td>
                        <td>Orther</td>
                        <td>Manna Agency</td>
                        <td>Saurav Manna</td>
                        <td>9988774455</td>
                        <td><span className="approve-tag">approve</span></td>
                        <td>
                          <span className="view-icon"><Link to="/vpp-request-detail"><IoIosEye /></Link></span>
                          {/* <span className="tick-icon"><FaCheck /></span>
                          <span className="delete-icon"><RxCross2 /></span> */}
                        </td> 
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>27</td>
                        <td>Kolkata</td>
                        <td>Test agent</td>
                        <td>Manna Manna</td>
                        <td>4561236541</td>
                        <td><span className="pending-tag">pending</span></td>
                        <td>
                          <span className="view-icon"><Link to="/vpp-request-detail"><IoIosEye /></Link></span>
                          {/* <span className="tick-icon"><FaCheck /></span>
                          <span className="delete-icon"><RxCross2 /></span> */}
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
        </section>
    </>
  )
}

export default VPPRequest