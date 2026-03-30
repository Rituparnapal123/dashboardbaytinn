import React from 'react'

// import { Tab } from "@mui/material"
import TableTopRow from "../assets/components/layouts/TableTopRow"

// import Leftmenu from "../assets/components/layouts/Leftmenu"
// import {  IoIosNotifications, IoIosSearch, IoMdSettings } from "react-icons/io"
import { IoIosEye } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

import PropertierGuestInfoBox from '../assets/components/layouts/PropertierGuestInfoBox';
import { FaBuilding } from "react-icons/fa6";
import { ImagePath } from '../theme/ImagePath';
import { FaUserCheck } from "react-icons/fa6";
import Timeline from '../assets/components/layouts/Timeline';

import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";


function createData(
  id: number,
  title: string,
  listingType: string,
  propertyType: string,
  city: string,
  status: string,
  created: string,
  action: React.ReactNode,
) {
  return { id, title, listingType, propertyType, city, status, created, action };
}

const rows = [
  createData(1, "Dawki View", "sorted", "Apartment", "Orther", "Draft", "2025-02-04", <React.Fragment> 
                          <span className='view-icon'><IoIosEye /></span>
                          <span className="tick-icon mx-3"><FaEdit /></span>
                          <span className="delete-icon"><MdDelete /></span>
                        </React.Fragment>),
  createData(2, "Dawki", "sorted", "Apartment", "Orther", "Draft", "2025-02-05", <React.Fragment> 
                         <span className='view-icon'><IoIosEye /></span>
                         <span className="tick-icon mx-3"><FaEdit /></span>
                          <span className="delete-icon"><MdDelete /></span>
                        </React.Fragment>),
  createData(3, "View", "sorted", "Apartment", "Orther", "Draft", "2025-02-06", <React.Fragment> 
                          <span className='view-icon'><IoIosEye /></span>
                          <span className="tick-icon mx-3"><FaEdit /></span>
                          <span className="delete-icon"><MdDelete /></span>
                        </React.Fragment>),

];

const Properties = () => {
  return (
    <>
        {/* Properties */}
        {/* <Leftmenu /> */}
        <TableTopRow 
          tabTopSearch={true} 
          tabTopPageSize={true} 
        />

        <section className="properties-table-sec mb-32">
<div className="table-responsive custom-table table-design">
            
          <Table sx={{ minWidth: 650 }} aria-label="customized table" className='table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Listing Type</TableCell>
            <TableCell>Property Type</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.listingType}</TableCell>
              <TableCell>{row.propertyType}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell><span className='draftTag'>{row.status}</span></TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
</div>
        </section>

        <section className="properties-sec">
          <Grid container spacing={2} className='mb-32'>
            <Grid size={{ xs: 12, sm: 12, md: 6 }} className='propertierGuestInfo-row'>
                <h2>Property & Guest Informatiton</h2>
              <div className='propertierGuestInfoBox'>
                <PropertierGuestInfoBox 
                  propertyGuestInfoTopRow= {true}
                  propertyGuestInfoTopTitle= "Property Guest Information"
                  PropertyGuestInfoTopIcon={FaBuilding}
                  propertyGuestIconColor="blue"
                  propertyGuestInfoBodyPic ={ImagePath.propertiesGuestpic}
                  propertyGuestInfoBodyTitle="Luxury Downtown Suite"
                  propertyGuestInfoBodyId="Property ID:PROP-10045" 
                  propertyGuestInfoBodyRating={true}
                />

                <PropertierGuestInfoBox 
                  propertyGuestInfoTopRow= {true}
                  propertyGuestInfoTopTitle= "Host Information"
                  propertyGuestIconColor="green"
                  propertyGuestInfoBodyPic ={ImagePath.ProfileAdminPic}
                  propertyGuestInfoPicCircelClass={true}
                  propertyGuestInfoBodySubTitle="Dubai Luxury Stays"
                  propertyGuestInfoBodyId="Host ID: H-5067" 
                  propertyGuestInfoBodytag="Supperhost"
                />
              </div>

              <div className='propertierGuestInfoBox'>
                <PropertierGuestInfoBox 
                  propertyGuestInfoTopRow= {true}
                  propertyGuestInfoTopTitle= "Guest Details"
                  PropertyGuestInfoTopIcon={FaUserCheck}
                  propertyGuestIconColor="green"
                  propertyGuestInfoBodyPic ={ImagePath.ProfileAdminPic}
                  propertyGuestInfoPicCircelClass={true}
                  propertyGuestInfoBodyTitle="Emma Richardson"
                  propertyGuestInfoBodyId="Guest ID: G-10089" 
                  propertyGuestInfoBodyRating={true}
                />
              </div>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6 }} className='timeline-row'>  
                <h2>Timeline & Activity</h2>
                <div className='timelineBox'>
                <Timeline
                  TimelineIcon={FaPlus}
                  timelineTitle="Reservation Created"
                  timelineContent="Guest made a reservation request"
                  timelineDate="Dec 18, 2024"
                  timelineTime="2:30 PM"
                  timelineFtrContent="Initial booking request submitted by guest with all required information."
                  
                />

                <Timeline
                  TimelineIcon={FaCheck}
                  timelineTitle="Host Confirmed"
                  timelineContent="Reservation was confirmed by host"
                  timelineDate="Dec 18, 2024"
                  timelineTime="4:15 PM"
                  timelineFtrContent="Host Approved the reservation within 2 Hours of the request."
                  timelineColor='green'
                />

                <Timeline
                  TimelineIcon={FaCirclePlus}
                  timelineTitle="Add-ons Requested"                  
                  timelineContent="Guest requested airport pick up and welcome basket"
                  timelineDate="Dec 19, 2024"                  
                  timelineTime="10:45 AM"
                  timelineFtrContent="Adiditional services requested : Airport Pickup (150 AED), and Welcome Basket (120 AED)."
                  timelineColor='purple'
                />

                <Timeline
                  TimelineIcon={FaCreditCard}                  
                  timelineTitle="Payment Completed"
                  timelineContent="Full payment processed successfully"
                  timelineDate="Dec 19, 2024"
                  timelineTime="11:20 AM"
                  timelineFtrContent="Total payment of 3,063 AED processed via Visa ending in 4532."
                  timelineColor='yellow'
                />

                </div>
            </Grid>
          </Grid>
        </section>
    </>
  )
}

export default Properties