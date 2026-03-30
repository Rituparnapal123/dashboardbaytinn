// import React from 'react'

import type { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { FaUser } from "react-icons/fa";


interface TabBookingDetailsProps {
    bookingDetailsHeaderTitle: string;
    BookingDetailsHeaderIcon: IconType;
    bookingDetailsGuestCountTitle: string;
    bookingDetailsGuestCountTotal: number;
    bookingDetailsAddOnTitle: string;
    bookingDetailsAddOnTag: string;
    bookingDetailsVarificationTitle: string;
    bookingDetailsVarificationTag: string;
    bookingDetailsPaymentTitle: string;
    bookingDetailsPaymentPrice: number;
    bookingDetailsSource: string;
    bookingDetailsSourceWeb: string;
    
}

const TabBookingDetails: React.FC<TabBookingDetailsProps> = ({bookingDetailsHeaderTitle, BookingDetailsHeaderIcon, bookingDetailsGuestCountTitle, bookingDetailsGuestCountTotal, bookingDetailsAddOnTitle, bookingDetailsAddOnTag, bookingDetailsVarificationTitle, bookingDetailsVarificationTag, bookingDetailsPaymentTitle, bookingDetailsPaymentPrice, bookingDetailsSource, bookingDetailsSourceWeb }) => {
  return (
    <div className='tabBookingBox tabBookingDetails'>
        {/* TabBookingDetails */}
        <div className="tabBookingHeader">
              <div className="tabBookingHeaderTitle"><h3>{bookingDetailsHeaderTitle}</h3></div>
              <div className="tabBookingHeaderIcon"><BookingDetailsHeaderIcon /></div>
        </div>

        <div className="financialList">
              <ul>
                  <li>
                    <div className="financialListLeft"><p>{bookingDetailsGuestCountTitle}</p></div>
                    <div className="financialListRight"><h3><FaUser /> {bookingDetailsGuestCountTotal}  Guests</h3></div>
                  </li>

                  <li>
                    <div className="financialListLeft"><p>{bookingDetailsAddOnTitle}</p></div>
                    <div className="financialListRight greentag"><p><FaCheck className="icon" /> {bookingDetailsAddOnTag}</p></div>
                  </li>

                  <li>
                    <div className="financialListLeft"><p>{bookingDetailsVarificationTitle}</p></div>
                    <div className="financialListRight greentag"><p><GoQuestion /> {bookingDetailsVarificationTag}</p></div>
                  </li>

                  <li>
                    <div className="financialListLeft"><p>{bookingDetailsPaymentTitle}</p></div>
                    <div className="financialListRight"><h3>{bookingDetailsPaymentPrice}</h3></div>
                  </li>

                  <li>
                    <div className="financialListLeft"><p>{bookingDetailsSource}</p></div>
                    <div className="financialListRight"><h3>{bookingDetailsSourceWeb}</h3></div>
                  </li>

                  </ul>
          </div>

    </div>
  )
}

export default TabBookingDetails