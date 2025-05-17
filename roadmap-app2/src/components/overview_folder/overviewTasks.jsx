import { compareDates } from "./comparingDate.js";
import '../../styles/tasksTab.css';


const TaskOverview = ({filteredList, label}) => {
    return (
       <div className='overview-container'>
            <h1>{label}</h1>
            {filteredList.map(({task, date, selected, id}) => (
                <div key={id} className='task-container'>
                    <p className='task-p'>{task}</p>
                    <p className='selected-p'>{selected}</p>
                    <p className='date-p'>{date}</p>
                </div>
            ))}
       </div>
    );
};




const OverviewTasks =({taskList, setActive})=> {
    const overDueList = taskList.filter(task => compareDates(task.date)==='overdue');
    const todayList = taskList.filter(task => compareDates(task.date)==='today');
    const soonList = taskList.filter(task => compareDates(task.date)==='soon');
    const laterList = taskList.filter(task => compareDates(task.date)==='later');

   
    if ((overDueList.length > 0) || (todayList.length > 0) || (soonList.length > 0) || (laterList.length > 0)) {
        setActive(true);
    };


    return (
        <div className='all-taskoverview-container'>
        {overDueList.length > 0 && (
          <TaskOverview filteredList={overDueList} label="overdue" />
        )}
        
        {todayList.length > 0 && (
            <TaskOverview filteredList={todayList} label={'today'} />
        )}
        {soonList.length > 0 && (
            <TaskOverview filteredList={soonList} label={'soon'} />
        )}
        {laterList.length > 0 && (
            <TaskOverview filteredList={laterList} label={'later'} />
        )}
        </div>
    );


};

export default OverviewTasks;