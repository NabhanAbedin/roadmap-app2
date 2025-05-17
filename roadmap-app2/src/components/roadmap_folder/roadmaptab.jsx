import RoadMapInput from "./roadmapInput";
import TaskBox from "./taskBox";
import '../../styles/taskBox.css';
import SaveRoadMap from './saveRoadMap';



const RoadMapTab = ({taskList,setTaskList, roadMaps, setRoadMaps}) => {
   
    
    const unfinishedList = taskList.filter(taskList => taskList.selected === 'unfinished');
    const inProgressList = taskList.filter(taskList => taskList.selected === 'inProgress');
    const completedList = taskList.filter(taskList => taskList.selected === 'completed');

    const handleDelete = (id) => {
        setTaskList(prev => prev.filter(task => task.id !== id));

    }

    return (
        <>
        <RoadMapInput setTaskList={setTaskList}/>
        <div className='task-boxes-container'>
        <TaskBox data={unfinishedList} name={'Unfinished'} onDelete={handleDelete}/>
        <TaskBox data={inProgressList} name={'In progress'} onDelete={handleDelete}/>
        <TaskBox data={completedList} name={'Completed'} onDelete={handleDelete}/>
        </div>
        <SaveRoadMap roadMaps={roadMaps} setRoadMaps={setRoadMaps} taskList = {taskList}/>
        
        </>
    )
}

export default RoadMapTab;