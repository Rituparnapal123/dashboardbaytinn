// import React from 'react'

import { Grid, TextField } from "@mui/material"
import Button from "../ui/Button"

const PersonalTabForm = () => {
  return (
    <div className="commonTabBody"> 
      {/* PersonalTabForm */}

        <Grid container spacing={2} className='mb-32'>
              <Grid size={{ xs: 12, sm: 12, md: 6 }} className='subscription-input'>
                  <p>First Name *</p>
                  <TextField id="outlined-basic" fullWidth label="admin" variant="outlined" />
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 6 }} className='subscription-input'>
                  <p>Last Name *</p>
                  <TextField id="outlined-basic" fullWidth label="admin" variant="outlined" />
              </Grid>


              <Grid size={{ xs: 12, sm: 12, md: 6 }} className='subscription-input'>
                  <p>Email *</p>
                  <TextField id="outlined-basic-email" fullWidth label="Email" variant="outlined" />
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 6 }} className='subscription-input'>
                  <p>Phone *</p>
                  <TextField id="outlined-basic-phone" fullWidth label="1234567890" variant="outlined" />
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 12 }} className='subscription-input'>
                  <p>Phone *</p>
                  <TextField id="outlined-basic-emer-phone" fullWidth label="Emergency phone number" variant="outlined" />
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 12 }} className='subscription-input'>
                  <Button title="Save" btnonClick={() => {console.log("Checked")}} btnColor="primary" />
              </Grid>
        </Grid>
    </div>
    
  )
}

export default PersonalTabForm