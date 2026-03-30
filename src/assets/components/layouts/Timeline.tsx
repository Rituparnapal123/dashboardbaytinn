// import React from 'react'

import type { IconType } from "react-icons";

interface TimelineProps {
    timelineColor?: "blue" | "green" | "purple" | "yellow";
    TimelineIcon: IconType;
    timelineTitle: string;
    timelineContent: string;
    timelineDate: string;
    timelineTime: string;
    timelineFtrContent: string;
}

const Timeline: React.FC<TimelineProps> = ({ timelineColor = "blue", TimelineIcon, timelineTitle, timelineContent, timelineDate, timelineTime, timelineFtrContent}) => {
  return (
   
        <div className={`timelineRow timeline-${timelineColor}`}>
            <div className="timelineLeftIcon"><span><TimelineIcon/></span></div>
            <div className="timelineRight">
                <div className="timelineRightTop">
                    <div className="timelineRightTopLeft">
                        <h6>{timelineTitle}</h6>
                        <p>{timelineContent}</p>
                    </div>
                    <div className="timelineRightTopRight">
                        <p>{timelineDate}</p>
                        <p>{timelineTime}</p>
                    </div>

                </div>
                <div className="timelineRightFtr">
                    <p>{timelineFtrContent}</p>
                </div>

            </div>
    </div>
  )
}

export default Timeline