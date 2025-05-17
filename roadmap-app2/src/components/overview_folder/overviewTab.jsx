import ProgressBar from "./progressBar";
import Date from "./date";
import OverviewTasks from "./overviewTasks";
import '../../styles/tasksTab.css';
import {useState} from 'react';


const OverviewTab = ({taskList}) => {
    const [active,setActive] = useState(false);

    const unfinishedList = taskList.filter(taskList => taskList.selected === 'unfinished');
    const inProgressList = taskList.filter(taskList => taskList.selected === 'inProgress');
    const completedList = taskList.filter(taskList => taskList.selected === 'completed');

    const tasksLength = taskList.length;

    return (
        <>
            <div className={`overview-wrapper ${active ? '' : 'not-active'}`}>
                <div className='date-task-container'>
                        <Date />
                    <ProgressBar taskList={unfinishedList} length={tasksLength} label="Unfinished" />
                    <ProgressBar taskList={inProgressList} length={tasksLength} label="In Progress" />
                    <ProgressBar taskList={completedList} length={tasksLength} label="Completed" />
                </div>
            <OverviewTasks taskList={taskList} setActive={setActive}/>

            </div>
            
        
        </>
    );
};

export default OverviewTab;