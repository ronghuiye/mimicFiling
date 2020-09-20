import React, {useState, useEffect} from "react"
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import AddCalendar from "./AddCalendar";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'state', headerName: 'State', width: 100 },
  { field: 'return', headerName: 'Return', width: 100 },
  { field: 'filingType', headerName: 'Filing Type', width: 130 },
  { field: 'legalEntity', headerName: 'Legal Entity', width: 130 },
  { field: 'filingFrequency', headerName: 'Filing Frequency', width: 160, valueFormatter: ({ value }) => value === 1 ? 'Monthly' : 'Quarterly'},
];

function CalendarList(props) {

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    props.fetchCalendarList()
  },[])


  const handleOnClick = () => {
    setOpen(true)
  }

  const handleOnClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ height: 600, width: 'auto' }}>
      <div style={{ display:'flex', flexDirection: 'row-reverse'}}>
          <Button variant="contained" onClick={handleOnClick} >ADD</Button>
      </div>
      <DataGrid rows={props.calendarList} columns={columns} pageSize={10} />
      <AddCalendar open={isOpen} onClose={handleOnClose} createCalendar={props.createCalendar} />
    </div>
  )

}

export default CalendarList