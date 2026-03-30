// import React from 'react'

import type { IconType } from "react-icons";


interface TabBookingAddOnProps {
    bookingAddOnHeaderTitle: string;
    BookingAddOnHeaderIcon: IconType;
    bookingAddOnAirportTitle: string;
    bookingAddOnAirportTag: string;
    bookingAddOnPremiumTitle: string;
    bookingAddOnPremiumPrice: number;

    bookingAddOnWellcomeTitle: string;
    bookingAddOnWellcomeTag: string;
    bookingAddOnLocalTitle: string;
    bookingAddOnLocalPrice: number;

    bookingAddOnfootTitle: string;
    bookingAddOnfootPrice: number;
}

const TabBookingAddOn: React.FC<TabBookingAddOnProps> = ({ bookingAddOnHeaderTitle, BookingAddOnHeaderIcon, bookingAddOnAirportTitle, bookingAddOnAirportTag, bookingAddOnPremiumTitle, bookingAddOnPremiumPrice, bookingAddOnWellcomeTitle, bookingAddOnWellcomeTag, bookingAddOnLocalTitle, bookingAddOnLocalPrice, bookingAddOnfootTitle, bookingAddOnfootPrice }) => {
  return (
    <div className='tabBookingBox tabBooking-add-on'>
        {/* TabBookingAddOn */}
        <div className="tabBookingHeader">
            <div className="tabBookingHeaderTitle"><h3>{bookingAddOnHeaderTitle}</h3></div>
            <div className="tabBookingHeaderIcon"><BookingAddOnHeaderIcon /></div>
        </div>
        <div className="financialList addon-inner-box mb-15">
            <ul>
                <li>
                    <div className="tabBookingAddOn-middle-left"><h3>{bookingAddOnAirportTitle}</h3></div> 
                    <div className="tabBookingAddOn-middle-right greentag"><p>{bookingAddOnAirportTag}</p></div>
                </li>

                <li>
                    <div className="tabBookingAddOn-middle-left"><p>{bookingAddOnPremiumTitle}</p></div> 
                    <div className="tabBookingAddOn-middle-right"><h3>{bookingAddOnPremiumPrice} AED</h3></div>
                </li>
            </ul>
        </div>


        <div className="financialList addon-inner-box">
            <ul>
                <li>
                    <div className="tabBookingAddOn-middle-left"><h3>{bookingAddOnWellcomeTitle}</h3></div> 
                    <div className="tabBookingAddOn-middle-right yellowtag"><p>{bookingAddOnWellcomeTag}</p></div>
                </li>

                <li>
                    <div className="tabBookingAddOn-middle-left"><p>{bookingAddOnLocalTitle}</p></div> 
                    <div className="tabBookingAddOn-middle-right"><h3>{bookingAddOnLocalPrice} AED</h3></div>
                </li>

            </ul>
        </div>

        <div className="footerBottom addon-ftr">
            <div className="footerBottomLeft"><h6>{bookingAddOnfootTitle}</h6></div>
            <div className="footerBottomRight"><h3>{bookingAddOnfootPrice}  AED</h3></div>
        </div>
        

    </div>
  )
}

export default TabBookingAddOn