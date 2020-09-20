import React, {useState, useEffect} from "react"
import { DataGrid } from '@material-ui/data-grid';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const STYLES = {
  formControl: {
    minWidth: '150px',
    padding: '10px'
  },
  span:{
    display: 'flex'
  }
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'state', headerName: 'State', width: 130 },
  { field: 'return', headerName: 'Return', width: 130 },
  { field: 'filingType', headerName: 'Filing Type', width: 130 },
  { field: 'legalEntity', headerName: 'Legal Entity', width: 130 },
  { field: 'amount', headerName: 'Amount', width: 130 },
];

function ReturnList(props) {

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    props.fetchReturnList(props.year,props.month)
  }, [props.year,props.month])

  const handleOnRowClick = rowParams => {
    setOpen(true)
  }

  const handleOnClose = event => {
    setOpen(false)
  }

  const handleYearOnChange = event => {
    let value = event.target.value
    props.setYear(value)
  }

  const handleMonthOnChange = event => {
    let value = event.target.value
    props.setMonth(value)
  }

  return (
    <div style={{ height: 600}}>
      <span style={STYLES.span}>
        <FormControl style={STYLES.formControl}>
          <Select
            labelId="year-label"
            id="year"
            value={props.year}
            onChange={handleYearOnChange}
          >
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={STYLES.formControl}>
          <Select
            labelId="month-label"
            id="month"
            value={props.month}
            onChange={handleMonthOnChange}
          >
            <MenuItem value={1}>Jan</MenuItem>
            <MenuItem value={2}>Feb</MenuItem>
            <MenuItem value={3}>Mar</MenuItem>
            <MenuItem value={4}>Apr</MenuItem>
            <MenuItem value={5}>May</MenuItem>
            <MenuItem value={6}>Jun</MenuItem>
            <MenuItem value={7}>Jul</MenuItem>
            <MenuItem value={8}>Aug</MenuItem>
            <MenuItem value={9}>Sep</MenuItem>
            <MenuItem value={10}>Oct</MenuItem>
            <MenuItem value={11}>Nov</MenuItem>
            <MenuItem value={12}>Dec</MenuItem>
          </Select>
        </FormControl>
      </span>
      <DataGrid rows={props.returnList} columns={columns} pageSize={10} onRowClick={handleOnRowClick} />
      <Drawer open={isOpen} anchor='right' onClose={handleOnClose}>
        <div>form by state</div>
      </Drawer>
    </div>
  )

}

export default ReturnList