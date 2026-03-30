// import React from 'react'

import { IoIosNotifications, IoIosSearch, IoMdSettings } from "react-icons/io"
import RightTopBar from "../assets/components/layouts/RightTopBar"
import TabCommon from "../assets/components/layouts/TabCommon"
import ReservationMangeTabTop from "../assets/components/layouts/ReservationMangeTabTop"
import TabFilterList from "../assets/components/layouts/TabFilterList"
import TabBookingFinancial from "../assets/components/layouts/TabBookingFinancial"

import { FaMoneyBillWave } from "react-icons/fa6";
import { Grid } from "@mui/material"
import TabBookingDetails from "../assets/components/layouts/TabBookingDetails"
import { HiUserGroup } from "react-icons/hi"
import TabBookingAddOn from "../assets/components/layouts/TabBookingAddOn"
import { FaCirclePlus } from "react-icons/fa6";


const tabs = [
    { label: "Admin view", content: 
        <div className="245">   
            {/* Reservation Management */}
            <ReservationMangeTabTop reservationsTitle="Reservation Management"
            reservationsBtn="Modal Reservation"
            reservationsSearch="Search"
            reservationsFilter="Filter"
            reservationsPast="Past" 
            reservationsCurrent="Current"
            reservationsUpcoming="Upcoming"
            modalTitle="Modal Reservation Management-1"
            modalContent="Modal content 1"/>



            <div className="tabFilterListWrapper">
                <TabFilterList tabFilterTitle="BYT - 45789" 
                tagGreen = {true}
                tagBlue = {true}
                tagpurple = {true}
                tagYellow = {true}
                tabfilterDate="Dec 15, 2024 - Dec 20, 2024" 
                tabfilterLocation="Miami Beach, FL"
                tabfilterGuestName="Sarah Johnson" 
                tabfilterGuestPertion="2 Adults, 1 Child"/>

                <TabFilterList tabFilterTitle="BYT - 45790" 
                tagGreen = {true}
                tagRed = {true}
                tabfilterDate="Jan 5, 2025 - Jan 12, 2025" 
                tabfilterLocation="Los Angeles, CA"
                tabfilterGuestName="Sarah Johnson" 
                tabfilterGuestPertion="2 Adults, 1 Child"/>

                <TabFilterList tabFilterTitle="BYT - 45791" 
             tagYellow = {true}
             tagGray = {true}            
             tabfilterDate="Feb 1, 2025 - Feb 8, 2025"             
             tabfilterLocation="New York, NY"             
             tabfilterGuestName="Emma Wilson"
             tabfilterGuestPertion="2 Adults"/>
            </div>
        </div>
    },
    { label: "Host/Agency view", content: 
        <div>
            <ReservationMangeTabTop
            reservationsTitle="Reservation Booking Management"
            reservationsBtn="Booking Reservation" 
            reservationsSearch="Booking search"
            reservationsFilter="Booking Filter"
            reservationsPast="Past Booking ID"
            reservationsCurrent="Current Booking No"
            reservationsUpcoming="Upcomming Booking No"
            modalTitle="Modal Reservation Booking Management-2"
            modalContent="Modal content 2"
            />
            <Grid container spacing={2} className='mb-32'>
                <Grid size={{ xs: 12, sm: 12, md: 12 }} className='bookingSecTitle'>
                    <h2>Booking Information</h2>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} className='subscription-input'>
                    <TabBookingFinancial 
                    bookingFinancialHeaderTitle="Financial Summary" 
                    BookingFinancialHeaderIcon={FaMoneyBillWave}
                    baseAmountTitle ="Base Amount" 
                    baseAmountPrice = {2450}
                    taxesFeesTitle ="Taxes & Fees" 
                    taxesFeesPrice ={245}
                    serviceChargesTitle="Service Charges" 
                    serviceChargesPrice={98}
                    subtotalTitle="Subtotal" 
                    subtotalPrice={2793}
                    bookingFinancialfootTitle="Total" 
                    bookingFinancialfootPrice={3063} 
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} className='subscription-input'>
                    <TabBookingDetails 
                    bookingDetailsHeaderTitle="Booking Details" 
                    BookingDetailsHeaderIcon ={HiUserGroup}
                    bookingDetailsGuestCountTitle ="Guest Count" 
                    bookingDetailsGuestCountTotal ={4} 
                    bookingDetailsAddOnTitle ="Add-ons Requested" 
                    bookingDetailsAddOnTag ="Yes" 
                    bookingDetailsVarificationTitle ="Varification-Status" 
                    bookingDetailsVarificationTag ="Varified" 
                    bookingDetailsPaymentTitle ="Payment Method" 
                    bookingDetailsPaymentPrice ={4532}
                    bookingDetailsSource ="Booking Source" 
                    bookingDetailsSourceWeb="Direct Weabsite"
                    /> 
                    
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} className='subscription-input'>
                    <TabBookingAddOn
                    bookingAddOnHeaderTitle="Add-ons Service" 
                    BookingAddOnHeaderIcon={FaCirclePlus}
                    bookingAddOnAirportTitle="Airport Pickup"  
                    bookingAddOnAirportTag ="Confirmed"
                    bookingAddOnPremiumTitle="Premium Vehicle Services" 
                    bookingAddOnPremiumPrice={150}
                    bookingAddOnWellcomeTitle="Welcome Basket" 
                    bookingAddOnWellcomeTag ="Processing"
                    bookingAddOnLocalTitle="Local delicacies & amenities" 
                    bookingAddOnLocalPrice={120}
                    bookingAddOnfootTitle="Total Add-ons" 
                    bookingAddOnfootPrice={270}
                    />
                </Grid>

            </Grid>
            
        </div>
         },
    { label: "Guest view", content: "Guest view" },
    { label: "Customer Support view", content: "Customer Support view" },
]

const ProfileReservation = () => {
  return (
    <>
        {/* Profile-Reservation */}
        <RightTopBar 
            title="Profile" 
            Searchicon={IoIosSearch} 
            Notification={IoIosNotifications} 
            SettingGear={IoMdSettings} />

        <section className="profile-reservation-tab-sec mb-32">
            <TabCommon tabs={tabs} tabDesignColor="blackTab" />
        </section>
    </>
  )
}

export default ProfileReservation