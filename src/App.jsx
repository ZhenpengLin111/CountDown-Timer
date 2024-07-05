import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Event } from './Components/Event';
import { AddCountDown } from './Components/AddCountDown';
import { useState } from 'react';
import { Header } from './Components/Header';
import './App.scss'
function App() {
  // Array for counter
  const [events, setEvents] = useState([])
  const getEvents = (event) => {
    setEvents([...events, event])
  }

  // Make header bar appear when scrolling to bottom
  const header = document.querySelector('.header')
  const onScroll = (e) => {
    const { scrollTop } = e.target
    if(scrollTop >= 100) {
      header.classList.add('show')
    } else {
      header.classList.remove('show')
    }
  }

  // Delete counter
  const onDel = (id) => {
    setEvents(events.filter(event => event.id !== id))
  }
  return (
    <div className="App" onScroll={onScroll}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header />
        <div className='counter-container'>
          {events.map((event) => {
            return <Event t={event.time} n={event.eventName} key={event.id} id={event.id} onDel={onDel}/>
          })}
        </div>
        <AddCountDown onGetEvents={getEvents} />
      </LocalizationProvider>
    </div>
  );
}

export default App;
