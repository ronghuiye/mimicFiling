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

function AddCalendar(props) {

  const [newCalendar, setNewCalendar] = useState({
    state:'',
    return:'',
    filingType:'',
    legalEntity:'',
    filingFrequency:''
  })

  const [error, setError] = useState({
    state:'',
    return:'',
    filingType:'',
    legalEntity:'',
    filingFrequency:''
  })

  const handleCreate = () => {

    props.onClose()
    props.createCalendar(newCalendar)
    setNewCalendar({
      state:'',
      return:'',
      filingType:'',
      legalEntity:'',
      filingFrequency:''
    })
  }

  const handleOnChange = e => {console.log(e.target)
    let {id, value} = e.target
    let err = {...error}
    switch (id){
      case "state":
        err.state = value.length >= 2 ? '':'At least 2 characters long'
        setNewCalendar({...newCalendar,state:value})
        break;
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
    setNewCalendar({...newCalendar,filingFrequency:e.target.value})
  }

  const handleOnClose = () => {
    props.onClose()
    setNewCalendar({
      state:'',
      return:'',
      filingType:'',
      legalEntity:'',
      filingFrequency:''
    })
    setError({
      state:'',
      return:'',
      filingType:'',
      legalEntity:'',
      filingFrequency:''
    })
  }

  const isDisabled = () => {
    return error.state || error.return || error.filingType || error.legalEntity || error.filingFrequency || !newCalendar.state || !newCalendar.return || !newCalendar.filingType || !newCalendar.legalEntity || !newCalendar.filingFrequency
  }

  return (
    <div style={{ height: 600}}>
      <Drawer open={props.open} anchor='right' onClose={handleOnClose}>
        <div style={STYLES.div}>
          <TextField
            id="state"
            label="State"
            value={newCalendar.state}
            onChange={handleOnChange}
            helperText={error.state}
            variant="filled"
          />
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