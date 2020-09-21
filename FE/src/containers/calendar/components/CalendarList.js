import React, {useState, useEffect} from "react"
import AddCalendar from "./AddCalendar";
import ListView from "./CalendarListView";


const headCells = [
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'state', numeric: false, disablePadding: false, label: 'STATE' },
  { id: 'return', numeric: false, disablePadding: false, label: 'RETURN' },
  { id: 'filingType', numeric: false, disablePadding: false, label: 'FILING TYPE' },
  { id: 'legalEntity', numeric: false, disablePadding: false, label: 'LEGAL ENTITY' },
  { id: 'filingFrequency', numeric: false, disablePadding: false, label: 'FILING FREQUENCY' },
];

function CalendarList(props) {

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    props.fetchCalendarList(props.pageState)
  },[props.pageState.order, props.pageState.rowsPerPage, props.pageState.orderBy, props.pageState.page])

  const handleOnClick = () => {
    setOpen(true)
  }

  const handleOnClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ height: 600, width: 'auto' }}>
      <ListView rows={props.calendarList} headCells={headCells} pageState={props.pageState} setPageState={props.setPageState} addOnClick={handleOnClick} deleteOnClick={props.deleteCalendar} />
      <AddCalendar open={isOpen} onClose={handleOnClose} createCalendar={props.createCalendar} />
    </div>
  )

}

export default CalendarList