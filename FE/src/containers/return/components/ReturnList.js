import React, {useState, useEffect} from "react"
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReturnListView from './ReturnListView'

const STYLES = {
  formControl: {
    minWidth: '150px',
    padding: '10px'
  },
  span:{
    display: 'flex'
  }
}

const headCells = [
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'state', numeric: false, disablePadding: false, label: 'STATE' },
  { id: 'return', numeric: false, disablePadding: false, label: 'RETURN' },
  { id: 'filingType', numeric: false, disablePadding: false, label: 'FILING TYPE' },
  { id: 'legalEntity', numeric: false, disablePadding: false, label: 'LEGAL ENTITY' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'AMOUNT' },
];

const yearItems = [{label:'2019', value:2019},{label:'2020', value:2020},{label:'2021', value:2021}]
const monthItems = [
  {label:'Jan', value:1},
  {label:'Feb', value:2},
  {label:'Mar', value:3},
  {label:'Apr', value:4},
  {label:'May', value:5},
  {label:'Jun', value:6},
  {label:'Jul', value:7},
  {label:'Aug', value:8},
  {label:'Sep', value:9},
  {label:'Oct', value:10},
  {label:'Nov', value:11},
  {label:'Dec', value:12}
  ]

function ReturnList(props) {

  const {fetchReturnList, year, month, setYear, setMonth, returnList, selected, setSelected} = props

  useEffect(() => {
    fetchReturnList(year,month)
  }, [year,month])

  const handleOnChange = event => {
    const {value, name} = event.target
    if(name === 'year')
      setYear(value)
    else
      setMonth(value)
    setSelected([])
  }

  const renderYearItems = () => yearItems.map(i => <MenuItem value={i.value}>{i.label}</MenuItem>)

  const renderMonthItems = () => monthItems.map(i => <MenuItem value={i.value}>{i.label}</MenuItem>)

  return (
    <div style={{ height: 600}}>
      <span style={STYLES.span}>
        <FormControl style={STYLES.formControl}>
          <Select
            labelId="year-label"
            id="year"
            name="year"
            value={year}
            onChange={handleOnChange}
          >
            {renderYearItems()}
          </Select>
        </FormControl>
        <FormControl style={STYLES.formControl}>
          <Select
            labelId="month-label"
            id="month"
            name="month"
            value={month}
            onChange={handleOnChange}
          >
            {renderMonthItems()}
          </Select>
        </FormControl>
      </span>
      <ReturnListView rows={returnList} headCells={headCells} selected={selected} setSelected={setSelected} />
    </div>
  )

}

export default ReturnList