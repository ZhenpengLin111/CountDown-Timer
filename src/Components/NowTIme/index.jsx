import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './index.scss'

export const NowTime = () => {
  const [now, setNow] = useState(dayjs(new Date()).format('ddd YYYY-MM-DD HH:mm:ss'))
  const getNowTime = () => {
    setNow(dayjs(new Date()).format('ddd YYYY-MM-DD HH:mm:ss'))
  }
  useEffect(() => {
    const timer = setInterval(() => {
      getNowTime()
    })

    return () => clearInterval(timer)
  }, [])
  return (
    <div className='nowTime'>
      <span>{now}</span>
    </div>
  )
}