// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Properties from "../pages/Properties"
import VPPRequest from "../pages/VPPRequest"
import Dashboard from "../pages/Dashboard"
import Manage from "../pages/Manage"
import MainLayout from "../assets/components/layouts/MainLayout"
import Subscription from "../pages/Subscription"
import Profile from "../pages/Profile"
import ProfileReservation from "../pages/ProfileReservation"

const AppRoutes = () => {
  return (
    <>
        {/* AppRoutes */}
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="*" element={<Dashboard />} />
                <Route path="vpp-request" element={<VPPRequest />} />
                <Route path="manage" element={<Manage/>} />
                <Route path="subscription" element={<Subscription/>} />
                <Route path="properties" element={<Properties/>} />
                <Route path="profile" element={<Profile/>} />
                <Route path="profilereservation" element={<ProfileReservation />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes