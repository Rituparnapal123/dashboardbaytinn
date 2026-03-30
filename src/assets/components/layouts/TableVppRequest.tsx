// import React from 'react'

interface TableVppRequestProps {
    ThId? : string;
    ThUserId? : string;
    ThCity? : string
    ThAgencyName? : string;
    ThFullName? : string;
    ThPosition? : string;
    ThStatus? : string;
    ThAction? : string;

    TdId? : string;
    TdUserId? : string;
    TdCity? : string;
    TdAgencyName? : string;
    TdFullName? : string;
    TdPosition? : string;
    TdStatus? : string;
    TdAction? : "view" | "tick" | "delete";
}

const TableVppRequest:React.FC<TableVppRequestProps> = ({ ThId, ThUserId, ThCity, ThAgencyName, ThFullName, ThPosition, ThStatus, ThAction, TdId, TdUserId, TdCity, TdAgencyName, TdFullName, TdPosition, TdStatus, TdAction}) => {
  return (
    <>
        TableVppRequest
        <div className="table-responsive custom-table">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">{ThId}</th>
                        <th scope="col">{ThUserId}</th>
                        <th scope="col">{ThCity}</th>
                        <th scope="col">{ThAgencyName}</th>
                        <th scope="col">{ThFullName}</th>
                        <th scope="col">{ThPosition}</th>
                        <th scope="col">{ThStatus}</th>
                        <th scope="col">{ThAction}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{TdId}</td>
                        <td>{TdUserId}</td>
                        <td>{TdCity}</td>
                        <td>{TdAgencyName}</td>
                        <td>{TdFullName}</td>
                        <td>{TdPosition}</td>
                        <td>{TdStatus}</td>
                        <td>{TdAction}</td> 
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default TableVppRequest