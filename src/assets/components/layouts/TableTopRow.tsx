import { TextField } from "@mui/material"
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

// import React from 'react'
interface TableTopRowProps {
    tabTopSearch? : boolean;
    tabTopRole? : boolean;
    tabTopPageSize? : boolean;
    tabTopReset? : boolean;

}

const TableTopRow: React.FC<TableTopRowProps> = ({tabTopSearch = false, tabTopRole= false, tabTopPageSize = false, tabTopReset = false}) => {
  return (
    <>
        {/* TableTopRow */}
        <div className="tableTopRow">
            <div className="tableTopRow-left">
                { tabTopSearch && 
                    <div className="tableTopRow-left-search">
                        <span><IoIosSearch /></span>
                        <TextField id="outlined-basic" fullWidth label="Search" variant="outlined" sx={{ "& fieldset": { border: "none" }}}/>
                    </div>
                }
                
            </div>
            <div className="tableTopRow-right">
                { tabTopRole && 
                    <div className="tableTopRow-right-role">
                        Role
                        <TextField id="outlined-basic" label="Role" variant="outlined" sx={{"& fieldset": { borderColor:"#E5E7EB", borderRadius: "8px"}}} />
                    </div>
                }
              
                { tabTopPageSize && 
                    <div className="tableTopRow-right-page-size">
                        Page Size
                        <TextField id="outlined-basic" variant="outlined" sx={{"& fieldset": { borderColor:"#E5E7EB",  borderRadius: "8px"}}}/>
                    </div>
                }
            

                { tabTopReset && 
                    <div className="tableTopRow-right-reset">
                        <Link to = "#">Reset Filters</Link>
                    </div>
                }
                
            </div>
        </div>
    </>
  )
}

export default TableTopRow