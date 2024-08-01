import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import './index.scss'
import { NowTime } from '../NowTIme';


export const Header = () => {
  return (
    <div className='header'>
      {/* <Box sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position="static" color='transparent'>
          <Toolbar>
            <AlarmOnIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
            <Typography variant="h6" component="div" sx={{
              flexGrow: 1, fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
            }}>
              Countdown Timer
            </Typography>
          </Toolbar>
        </AppBar>
      </Box> */}
      <AlarmOnIcon className='header-icon' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
      <span>Countdown Timer</span>
      {/* <NowTime /> */}
    </div>

  )
}