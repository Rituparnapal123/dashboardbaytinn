// import React from 'react'

import { Grid } from "@mui/material"
import Button from "../ui/Button"
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";




import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '1000px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


interface ReservationfilterProps {
    reservationsTitle: string;
    reservationsBtn: string;
    reservationsSearch?: string;
    reservationsFilter?: string;
    reservationsPast?: string;
    reservationsCurrent?: string;
    reservationsUpcoming?: string;

    modalTitle?: string;
    modalContent?: string;
    
}

const ReservationMangeTabTop: React.FC<ReservationfilterProps> = ({ reservationsTitle, reservationsBtn, reservationsSearch, reservationsFilter, reservationsPast, reservationsCurrent, reservationsUpcoming, modalTitle, modalContent }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
  return (
        
        <div className="commonSecCard mb-32">

                <Grid container spacing={2} alignItems={"center"} className='mb-15'>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }} className='reservationTopLeft'>
                        <h4>{reservationsTitle}</h4>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 6 }} className='reservationTopRight text-right'>
                        {/* <Button title="+ New Reservation" btnonClick={() => {}} btnColor="primary" /> */}
                        
                            {   reservationsBtn && 
                                <Button title={reservationsBtn} BtnIcon={FiPlusCircle} btnonClick={handleOpen} btnColor="primary" />
                            }
                    </Grid>
                </Grid>
                    

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }} className='reservationBottomLeft'>
                        <ul>
                            {
                                reservationsSearch && <li><span><IoSearchOutline /></span> {reservationsSearch}</li>
                            }
                            {
                                reservationsFilter && <li><span><FaFilter /></span> {reservationsFilter}</li>
                            }
                           
                        </ul>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 6 }} className='reservationBottomRight'>
                        <ul>
                            {
                                reservationsPast && <li className="active">{reservationsPast}</li>
                            }
                            {
                                reservationsCurrent && <li>{reservationsCurrent}</li>
                            }
                            {
                                reservationsUpcoming && <li>{reservationsUpcoming}</li>
                            }
                        </ul>
                    </Grid>
                </Grid>
                    
    {/*--  Modal(Start) --*/}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalContent}
          </Typography>
        </Box>
    </Modal>
    {/*-- Modal(End) --*/}

        </div>

       

  )
}

export default ReservationMangeTabTop