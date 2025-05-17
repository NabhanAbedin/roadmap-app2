import '../../styles/roadmapinput.css';
import {useMemo} from 'react';

const DateInput =({selectedDate, setSelectedDate}) => {

    const currentDate = useMemo(()=> {
        const today = new Date();
        const y = today.getFullYear();
        const m = String(today.getMonth() + 1).padStart(2, '0');
        const d = String(today.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    },[]);

    const handleDateChange =(e)=> {
            setSelectedDate(e.target.value);
    }
    return (
        <div className='date-input-container'>
            <input
            id="my-date"
            type="date"
            value={selectedDate}
            min = {currentDate}
            onChange={handleDateChange}           
            />

        </div>
    );
};

export default DateInput;