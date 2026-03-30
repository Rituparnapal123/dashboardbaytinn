// import React from 'react'

import type { IconType } from "react-icons";
import { FaCrown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

interface PropertierGuestInfoBoxProps {
    propertyGuestInfoTopRow?: boolean;
    propertyGuestInfoTopTitle?: string;
    PropertyGuestInfoTopIcon?: IconType;
    propertyGuestIconColor?: "blue" | "green" | "yellow" | "red";


    propertyGuestInfoBodyPic?: string;
    propertyGuestInfoPicCircelClass?: boolean;
    propertyGuestInfoBodyTitle?: string;
    propertyGuestInfoBodySubTitle?: string;
    propertyGuestInfoBodyId?: string;
    propertyGuestInfoBodyRating?: boolean;
    propertyGuestInfoBodytag?: string;

}

const PropertierGuestInfoBox: React.FC<PropertierGuestInfoBoxProps> = ({ propertyGuestInfoTopRow = false, propertyGuestInfoTopTitle, PropertyGuestInfoTopIcon, propertyGuestIconColor, propertyGuestInfoBodyPic, propertyGuestInfoPicCircelClass = false, propertyGuestInfoBodyTitle, propertyGuestInfoBodySubTitle, propertyGuestInfoBodyId, propertyGuestInfoBodyRating= false, propertyGuestInfoBodytag = false  }) => {
  return (
    <div className='propertierGuestInfoBoxRow'>
        {/* PropertierGuestInfoBox */}
        {
            propertyGuestInfoTopRow && 
                <div className="propertyGuestInfoTop">
                <div className="propertyGuestInfoTopLeft">
                    { propertyGuestInfoTopTitle && 
                        <h4>{propertyGuestInfoTopTitle}</h4>
                    }
                </div>
                <div className={`propertyGuestInfoTopRight ${propertyGuestIconColor}`}>{PropertyGuestInfoTopIcon && <PropertyGuestInfoTopIcon/>}</div>
            </div>
        }
        <div className="propertyGuestInfoBody">
            <div className={ propertyGuestInfoPicCircelClass ? "propertyGuestInfoBodyPic propertyGuestInfoBodyPicCircel" : "propertyGuestInfoBodyPic"}>
                <img src={propertyGuestInfoBodyPic} alt="" />
            </div>
            <div className="propertyGuestInfoBodyContent">
                <div className="propertyGuestInfoBodyContentLeft">
                    {   propertyGuestInfoBodyTitle && 
                        <h2>{propertyGuestInfoBodyTitle}</h2>
                    }
                    {   propertyGuestInfoBodySubTitle && 
                        <h6>{propertyGuestInfoBodySubTitle}</h6>
                    }
                    <p>{propertyGuestInfoBodyId}</p>
                    {propertyGuestInfoBodyRating && 
                        <div className="propertyGuestInfoBodyRating">
                            <ul>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li>(4.9/5)</li>
                            </ul>
                        </div>
                    }
                </div>
                {propertyGuestInfoBodytag && <div className="propertyGuestInfoBodytag greentag">
                    <p><span><FaCrown /></span> {propertyGuestInfoBodytag}</p>
                </div>}

            </div>
        </div>

    </div>
  )
}

export default PropertierGuestInfoBox