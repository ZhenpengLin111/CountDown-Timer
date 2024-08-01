import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import './index.scss'

export const Header = () => {
  return (
    <div className='header'>
      <AlarmOnIcon className='header-icon' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
      <span>Countdown Timer</span>
    </div>

  )
}