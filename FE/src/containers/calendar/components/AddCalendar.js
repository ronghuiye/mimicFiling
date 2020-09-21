import React, {useState} from "react"
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const STYLES = {
  formControl: {
    minWidth: '150px'
  },
  div:{
    padding: '20px'
  }
}

const resetState = {
  state:'',
  return:'',
  filingType:'',
  legalEntity:'',
  filingFrequency:''
}

const STATES = [{value:'MA',label:'MA'},{value:'CA',label:'CA'},{value:'NH',label:'NH'},{value:'FL',label:'FL'},{value:'NY',label:'NY'},{value:'RI',label:'RI'}]

function AddCalendar(props) {

  const [newCalendar, setNewCalendar] = useState(resetState)

  const [error, setError] = useState(resetState)

  const handleCreate = () => {

    props.onClose()
    props.createCalendar(newCalendar)
    setNewCalendar(resetState)
  }

  const handleOnChange = e => {
    let {id, value} = e.target
    let err = {...error}
    switch (id){
      case "return":
        err.return = value.length >= 2 ? '':'At least 2 characters long'
        setNewCalendar({...newCalendar,return:value})
        break;
      case "filingType":
        err.filingType = value.length >= 2 ? '':'At least 2 characters long'
        setNewCalendar({...newCalendar,filingType:value})
        break;
      case "legalEntity":
        err.legalEntity = value.length >= 2 ? '':'At least 2 characters long'
        setNewCalendar({...newCalendar,legalEntity:value})
        break;
      default:
        break;
    }
    setError(err)
  }

  const handleSelect = e => {
    const {name, value} =e.target
    if(name === 'filingFrequency')
      setNewCalendar({...newCalendar,filingFrequency:value})
    else
      setNewCalendar({...newCalendar,state:value})
  }

  const handleOnClose = () => {
    props.onClose()
    setNewCalendar(resetState)
    setError(resetState)
  }

  const isDisabled = () => {
    return error.state || error.return || error.filingType || error.legalEntity || error.filingFrequency || !newCalendar.state || !newCalendar.return || !newCalendar.filingType || !newCalendar.legalEntity || !newCalendar.filingFrequency
  }

  const stateMenuItems = () => STATES.map(s =>  <MenuItem value={s.value}>{s.label}</MenuItem>)

  return (
    <div style={{ height: 600}}>
      <Drawer open={props.open} anchor='right' onClose={handleOnClose}>
        <div style={STYLES.div}>
          <FormControl style={STYLES.formControl}>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="dselect-label"
              id="state"
              name="state"
              value={newCalendar.state}
              onChange={handleSelect}
            >
              {stateMenuItems()}
            </Select>
            <FormHelperText>{error.filingFrequency}</FormHelperText>
          </FormControl>
        </div>
        <div style={STYLES.div}>
          <TextField
            id="return"
            label="Return"
            value={newCalendar.return}
            onChange={handleOnChange}
            helperText={error.return}
            variant="filled"
          />
        </div>
        <div style={STYLES.div}>
          <TextField
            id="filingType"
            label="Filing Type"
            value={newCalendar.filingType}
            onChange={handleOnChange}
            helperText={error.filingType}
            variant="filled"
          />
        </div>
        <div style={STYLES.div}>
          <TextField
            id="legalEntity"
            label="Legal Entity"
            value={newCalendar.legalEntity}
            onChange={handleOnChange}
            helperText={error.legalEntity}
            variant="filled"
          />
        </div>
        <div style={STYLES.div}>
          <FormControl style={STYLES.formControl}>
            <InputLabel id="filingFrequency-label">Filing Frequency</InputLabel>
            <Select
              labelId="dselect-label"
              id="filingFrequency"
              name="filingFrequency"
              value={newCalendar.filingFrequency}
              onChange={handleSelect}
            >
              <MenuItem value={1}>Monthly</MenuItem>
              <MenuItem value={2}>Quarterly</MenuItem>
            </Select>
            <FormHelperText>{error.filingFrequency}</FormHelperText>
          </FormControl>
        </div>
        <div style={STYLES.div}>
          <Button id="createBtn" variant="outlined" disabled={isDisabled()} onClick={handleCreate} >CREATE</Button>
        </div>
      </Drawer>
    </div>
  )

}

export default AddCalendar