import { Grid } from '@mui/material';
// import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

interface DashboardCardProps {
    lefSubttitle: string;
    leftnumber: number;
    unit?: string;
    rightIcon: string;
    bottonLink: string;
    cardColor: "greenLight" | "green" | "yellow" | "red";
}

const DashboardCard: React.FC<DashboardCardProps> = ({lefSubttitle, leftnumber, unit, rightIcon, bottonLink, cardColor}) => {
  return (
    <>
        {/* DashboardCard */}
        
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
                <div className={`dashboard-card text-white card-${cardColor}`}> 
                    <div className="dashboard-card-top">
                        <div className="dashboard-card-top-left">
                            <p>{lefSubttitle}</p>
                            <h2>{leftnumber}{unit}</h2>
                        </div>
                        <div className="dashboard-card-top-right">
                            <img src={rightIcon} alt="rightIcon" />
                        </div>
                    </div>
                    <div className="dashboard-card-bottom">
                        <a href="#">{bottonLink} <FaArrowRight /></a>
                        
                    </div>
                </div>
            </Grid>

    </>
  )
}

export default DashboardCard