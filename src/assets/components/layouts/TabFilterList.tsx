// import React from 'react'

import { NavLink } from "react-router-dom"

interface TabFilterListProps {
    tabFilterTitle: string
    tagGreen?: boolean
    tagBlue?: boolean
    tagpurple?: boolean
    tagYellow?: boolean
    tagRed?: boolean
    tagGray?: boolean
    tabfilterDate: string
    tabfilterLocation: string
    tabfilterGuestName: string
    tabfilterGuestPertion: string

}

const TabFilterList: React.FC<TabFilterListProps> = ({ tabFilterTitle, tagGreen=false, tagBlue= false, tagpurple=false, tagYellow=false, tagRed=false, tagGray=false, tabfilterDate, tabfilterLocation, tabfilterGuestName, tabfilterGuestPertion }) => {
  return (
    <>
        {/* TabFilterList */}
        <div className='tabFilterRow'>
            <div className="tabFilterRowLeft">
                <div className="tabFilterRowLeftTitle">
                    <h3>{tabFilterTitle}</h3>
                
                    <div className="tabFilterRowLeftTag">
                        {tagGreen && <span className="tagGreen">Confirmed</span>}
                        {tagBlue && <span className="tagBlue">Paid</span>}
                        {tagpurple && <span className="tagpurple">Add-ons</span>}
                        {tagYellow && <span className="tagYellow">In Stay</span>}
                        {tagRed && <span className="tagRed">Dispute Open</span>}
                        {tagGray && <span className="tagGray">Payment Due</span>}
                    </div>
                </div>
                <div className="tab-filter-date-list">
                    <ul>
                        <li>{tabfilterDate}</li>
                        <li>{tabfilterLocation}</li>
                    </ul>
                </div>

                <div className="tab-filter-guest-list">
                    <ul>
                        <li>Guest: {tabfilterGuestName}</li>
                        <li>{tabfilterGuestPertion}</li>
                    </ul>
                </div>
                    
                
                
            </div>
            <div className="tabFilterRowRight"><NavLink to="/">More Details</NavLink></div>
        </div>
    </>
  )
}

export default TabFilterList