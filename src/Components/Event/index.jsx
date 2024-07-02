import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import './index.scss'

export const Event = ({ t, n, id, onDel }) => {
  // Chosen event time
  const [time, setTime] = useState(null)
  const [eventName, setEventName] = useState(null)
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const timerRef = useRef(null)

  useEffect(() => {
    setTime(t)
  }, [t])
  useEffect(() => {
    setEventName(n)
  }, [n])
  useEffect(() => {
    if(time && eventName) {
      handleCountDown()
    }
  }, [time])

  const handleCountDown = () => {
    console.log(time)
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      const countDown_ms = time.$d.getTime() - new Date().getTime()
      msToTime(countDown_ms)
      if (countDown_ms <= 0) {
        clearInterval(timerRef.current)
        setCountDown({
          days: 'D',
          hours: 'O',
          minutes: 'N',
          seconds: 'E'
        })
      }
    }, 1000)
  }

  function msToTime(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    // Pad the hours, minutes, and seconds with leading zeros if necessary
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    setCountDown({
      days,
      hours,
      minutes,
      seconds
    })
  }

  // Remove specific counter
  const handleRemove = () => {
    console.log(id)
    onDel(id)
  }

  return (
    <div className='Event'>
      <Box
        className='Event-box'
        height={400}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <h1>COUNT DOWN </h1>
        <h2>TO</h2>
        <h1 className='event-name'>{eventName ? eventName : 'Event Name'}</h1>
        <div className='countdown-container'>
          <div className='countdown'>
            <span>{countDown.days}</span>
            <span>DAYS</span>
          </div>
          <span className='colon'>:</span>
          <div className='countdown'>
            <span>{countDown.hours}</span>
            <span>HOURS</span>
          </div>
          <span className='colon'>:</span>
          <div className='countdown'>
            <span>{countDown.minutes}</span>
            <span>MINUTES</span>
          </div>
          <span className='colon'>:</span>
          <div className='countdown'>
            <span>{countDown.seconds}</span>
            <span>SECONDS</span>
          </div>
        </div>
        <button className='delBtn' onClick={handleRemove}>
          <ClearIcon />
        </button>
      </Box>
      
    </div>

  )
}