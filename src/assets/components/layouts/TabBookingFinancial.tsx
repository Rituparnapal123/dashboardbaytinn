// import React from 'react'
import type { IconType } from "react-icons";

interface TabBookingFinancialProps {
  bookingFinancialHeaderTitle: string;
  BookingFinancialHeaderIcon: IconType;
  baseAmountTitle: string;
  baseAmountPrice: number;
  taxesFeesTitle: string;
  taxesFeesPrice: number;
  serviceChargesTitle: string;
  serviceChargesPrice: number;
  subtotalTitle: string;
  subtotalPrice: number;
  bookingFinancialfootTitle: string;
  bookingFinancialfootPrice: number;
}

const TabBookingFinancial: React.FC<TabBookingFinancialProps> = ({ bookingFinancialHeaderTitle, BookingFinancialHeaderIcon, baseAmountTitle, baseAmountPrice, taxesFeesTitle, taxesFeesPrice, serviceChargesTitle, serviceChargesPrice, subtotalTitle, subtotalPrice, bookingFinancialfootTitle, bookingFinancialfootPrice }) => {
  return (
        <div className="tabBookingBox">
           {/* TabBookingInformation */}
 
            <div className="tabBookingHeader">
              <div className="tabBookingHeaderTitle"><h3>{bookingFinancialHeaderTitle}</h3></div>
              <div className="tabBookingHeaderIcon"><BookingFinancialHeaderIcon /></div>
            </div>

            <div className="baseAmount">
              <div className="baseAmountLeft"><p>{baseAmountTitle}</p></div>
              <div className="baseAmountRight"><h2>{baseAmountPrice} AED</h2></div>
            </div>

          <div className="financialList">
              <ul>
                  <li>
                    <div className="financialListLeft"><p>{taxesFeesTitle}</p></div>
                    <div className="financialListRight"><h3>{taxesFeesPrice}  AED</h3></div>
                  </li>

                  <li>
                    <div className="financialListLeft"><p>{serviceChargesTitle}</p></div>
                    <div className="financialListRight"><h3>{serviceChargesPrice}  AED</h3></div>
                  </li>
                
                  <li>
                    <div className="financialListLeft"><p>{subtotalTitle}</p></div>
                    <div className="financialListRight"><h3>{subtotalPrice}  AED</h3></div>
                  </li>

              </ul>
          </div>

            <div className="footerBottom">
              <div className="footerBottomLeft"><h6>{bookingFinancialfootTitle}</h6></div>
              <div className="footerBottomRight"><h2>{bookingFinancialfootPrice}  AED</h2></div>
            </div>
          
            
        </div>

  )
}

export default TabBookingFinancial