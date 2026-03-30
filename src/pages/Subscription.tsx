// import React from 'react'

import { IoIosNotifications } from "react-icons/io"
import { IoMdSettings } from "react-icons/io"
import RightTopBar from "../assets/components/layouts/RightTopBar"
import { Grid } from "@mui/material"
import TextField from '@mui/material/TextField';
import Button from "../assets/components/ui/Button";

const Subscription = () => {
  return (
    <>
        {/* Subscription */}
        <RightTopBar 
            title="Create Add On Service" 
            text="Manage your additional services" 
            Notification={IoIosNotifications} 
            SettingGear={IoMdSettings}
        />

        <section className="form-sec">
            <div className="form-card-box">
                <Grid container spacing={2} className='mb-32'>
                    <Grid size={{ xs: 12, sm: 12, md: 4 }} className='subscription-input'>
                        <p>Name *</p>
                        <TextField id="outlined-basic" fullWidth label="Enter addon name" variant="outlined" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 4 }} className='subscription-input'>
                        <p>Price *</p>
                        <TextField id="outlined-basic" fullWidth label="Enter addon name" variant="outlined" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 4 }} className='subscription-input'>
                        <p>Select Status *</p>
                        <TextField id="outlined-basic" fullWidth label="Enter addon name" variant="outlined" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 12 }} className='subscription-input'>
                        <Button title="Create Add On" btnonClick={() => {console.log("Checked")}} btnColor="primary" />
                    </Grid>

                </Grid>
            </div>
        </section>

        </>
  )
}

export default Subscription