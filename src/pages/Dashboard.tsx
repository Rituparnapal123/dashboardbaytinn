// import React from 'react'

import { Grid } from '@mui/material';
// import './App.css'

// import Leftmenu from '../assets/components/layouts/Leftmenu'
import RightTopBar from '../assets/components/layouts/RightTopBar'
import DashboardCard from '../assets/components/layouts/DashboardCard';
import { IoIosNotifications, IoIosSearch, IoMdSettings } from "react-icons/io";
import { LineChart } from '@mui/x-charts/LineChart';
import { ImagePath } from '../theme/ImagePath';

import { BarChart } from '@mui/x-charts/BarChart';
import Button from '../assets/components/ui/Button';



const data = [
  { month: 'Jan', users: 20 },
  { month: 'Feb', users: 30 },
  { month: 'Mar', users: 25 },
  { month: 'Apr', users: 35 },
  { month: 'May', users: 28 },
  { month: 'Jun', users: 40 },
];

const Dashboard = () => {
  return (
    <>
    {/* Dashboard */}

    {/* <div className='appMain-container'> */}
      {/* <Leftmenu /> */}

      {/* <div className='appMain-right'> */}

        <RightTopBar 
        title="Admin Dashboard" 
        text="Welcome back, Admin!" 
        Searchicon = {IoIosSearch}
        Notification= {IoIosNotifications}
        SettingGear={IoMdSettings}
        />

      <Grid container spacing={2} className='mb-32'>
        <DashboardCard 
        cardColor="greenLight"
        lefSubttitle="New Orders" 
        leftnumber={150} 
        // rightIcon="assets/images/card-icon1.png"
        rightIcon={ImagePath.DashcardIcon1}
        bottonLink="More info"
        />

        <DashboardCard 
        cardColor="green"
        lefSubttitle="Bounce Rate" 
        leftnumber={53}
        unit="%"
        rightIcon={ImagePath.DashboardCard2}
        bottonLink="More info"
        />

        <DashboardCard 
        cardColor="yellow"
        lefSubttitle="User Registrations" 
        leftnumber={44} 
        rightIcon={ImagePath.DashboardCard3}
        bottonLink="More info"
        />

        <DashboardCard 
        cardColor="red"
        lefSubttitle="Unique Visitors" 
        leftnumber={65} 
        rightIcon={ImagePath.DashboardCard4}
        bottonLink="More info"
        />
        </Grid>
        <Grid container spacing={2} className='mb-32'>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} className='chart-card'>
          <div className='chart-card-box'>
            <div className='chart-card-box-title'><h6>Revenue Overview</h6></div>
            {/* <div className='chart-bottom'>
              <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              height={300}
            />
            </div> */}

            <div className="chart-bottom">
              <LineChart
                xAxis={[
                  {
                    scaleType: "point",
                    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  },
                ]}
                series={[
                  {
                    data: [30, 45, 35, 50, 40, 60],
                    label: "Revenue",
                    curve: "monotoneX",   // smooth curve
                    color: "#40B8B8",
                  },
                ]}
                height={365}
                grid={{ vertical: true, horizontal: true }}
              />
          </div>

          </div>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6 }} className='chart-card'>
          <div className='chart-card-box'>
            <div className='chart-card-box-title'><h6>User Statistics</h6></div>
            <div className='chart-bottom'>
              <BarChart
                dataset={data}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[
                  {
                    dataKey: 'users',
                    label: 'New Users',
                    color: '#40B8B8',
                  },
                ]}
                height={365}
                grid={{ vertical: true, horizontal: true }}
              />
            </div>

          </div>
          </Grid>

        </Grid>

        <div className='btn-row btn-full'>
          <Button 
          title="Coming Soon"
          btnonClick={() => {console.log("Checked")}}
          btnColor="white"
          />

        </div>
       {/*--</div> appMain-right(End) --*/}

       {/*--</div> appMain-container(End) --*/}
    </>
  )
}

export default Dashboard