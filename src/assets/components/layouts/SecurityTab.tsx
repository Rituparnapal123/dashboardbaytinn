import { Grid } from '@mui/material'
import { ImagePath } from '../../../theme/ImagePath'
// import React from 'react'

const SecurityTab = () => {
  return (
    <div className="commonTabBody"> 
        {/* SecurityTab */}
        <Grid container spacing={2} className='mb-32'>
            <Grid size={{ xs: 12, sm: 12, md: 6 }} className='subscription-input'>
                <h3>Security</h3>
                <p>
                    Cones & Barrels has been a trusted provider of traffic control equipment and work zone safety solutions for years, supporting projects of all sizes across a wide range of industries. Known for reliable products and responsive service, the company offers everything from traffic cones and barricades to message boards and safety signage.
                </p>
                <p>
                    Cones & Barrels is committed to helping contractors, municipalities, and project managers maintain safe, compliant, and efficient work zones, while meeting all applicable federal, state, and local safety standards.
                </p>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6 }} className='subscription-input'> 
                <div className="security-img">
                    <img src={ImagePath.SeccurityPic} alt="SeccurityPic" />
                </div>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default SecurityTab