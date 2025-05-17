import {useState} from 'react';
import '../../styles/roadmapinput.css';
import checkImg from '../../images/check.png';
import DateInput from './dateInput';

const InputRadio = ({selected, onChange}) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <>
        <label>
        <input
          type="radio"
          name="color"
          value="unfinished"
          checked={selected === 'unfinished'}
          onChange={handleChange}
        />
        unfinished
      </label>

      <label>
        <input
          type="radio"
          name="color"
          value="inProgress"
          checked={selected === 'inProgress'}
          onChange={handleChange}
        />
        In progress
      </label>

      <label>
        <input
          type="radio"
          name="color"
          value="completed"
          checked={selected === 'completed'}
          onChange={handleChange}
        />
        Completed
      </label>
        </>
    )

}

const RoadMapInput = ({setTaskList}) => {
    const [task, setTask] = useState('');
    const [selected, setSelected] = useState('unfinished');
    const [selectedDate, setSelectedDate] = useState('');
    

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const addTask = () => {
        if (task.trim() !== '') {
            setTaskList(oldList => [...oldList, {selected: selected, task: task, date: selectedDate, id: crypto.randomUUID()}]);
            setTask('');
            setSelected('unfinished');
        } else {
            window.alert('Please enter a task before entering!');
        };
        
    };

    return (
        <>
        <div className='input-container'>
            <div className='user-inputs-container'>
              <input value={task}  onChange={handleChange} type="text" placeholder='Enter task' />
              <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
            <div className='button-container'>
                <InputRadio selected={selected} onChange={setSelected}/>
                <button onClick={addTask}><img src={checkImg} alt="" /></button>
            </div>
        </div>
        
        </>
        
    );


};


export default RoadMapInput;