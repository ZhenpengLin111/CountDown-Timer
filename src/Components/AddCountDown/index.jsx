import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import './index.scss'
export const AddCountDown = ({ onGetEvents }) => {
  const [time, setTime] = useState(null)
  const [eventName, setEventName] = useState(null)
  const [open, setOpen] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [timeError, setTimeError] = useState(false)
  const [helperText1, setHelperText1] = useState('')
  const [helperText2, setHelperText2] = useState('')

  // Pass selected time to App
  const sendEvent = () => {
    if (!time || !eventName) return
    onGetEvents({ id: new Date(), time, eventName })
    setTime('')
    setEventName('')
    setOpen(false)
  }

  const checkInput = (e) => {
    if (e.target.value === '') {
      setNameError(true)
      setHelperText1('Please Enter Event Name!')
    }
    else {
      setNameError(false)
      setHelperText1('')
    }
  }

  const checkTimeInput = (e) => {
    if(e.target.value === 'MM/DD/YYYY hh:mm aa') {
      setTimeError(true)
      setHelperText2('Please Select Event Time!')
    }
    else {
      setTimeError(false)
      setHelperText2('')
    }
  }

  return (
    <div className='addCountDown'>
      <div className='addBtn' onClick={() => setOpen(true)}>
        <AddIcon className='plusIcon' />
      </div>
      <Drawer className='drawer' anchor='bottom' open={open} onClose={() => setOpen(false)}>
        <Box sx={{ height: '500px' }}>
          <h1>Set Countdown</h1>
          <TextField className='textIpt' helperText={helperText1} error={nameError} onBlur={checkInput} id="outlined-basic" label="Event Name" variant="outlined" onChange={(e) => setEventName(e.target.value)} />
          <DateTimePicker
          className='dateIpt'
            disablePast
            label='Event Time'
            onChange={setTime}
            slotProps={{
              textField: {
                error: timeError,
                onBlur: checkTimeInput,
                helperText: helperText2
              }
            }}
          />
          <Button variant="contained" onClick={sendEvent}>Start</Button>
        </Box>
      </Drawer>
    </div>
  )
}