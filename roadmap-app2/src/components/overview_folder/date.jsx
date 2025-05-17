import {useState,useEffect} from 'react';
import dayjs from 'dayjs';
import '../../styles/date.css';

const Date = () => {
    const [currentTime, setCurrentTime] = useState(dayjs());

    useEffect(()=> {
        const interval = setInterval(()=> {
            setCurrentTime(dayjs());
        },1000);
        return () => clearInterval(interval);
    },[]);

    return (
      <div className='time-container'>
        <p className='date-label'>{currentTime.format('dddd, MMMM D, YYYY')}</p>
        <p className='time-label'>{currentTime.format('hh:mm A')}</p>
      </div>
    );

};


export default Date;