
import '../../styles/taskBox.css';
import editImg from '../../images/editIcon.png';
import deleteImg from '../../images/delete.png';

const TaskBox = ({data, name, onDelete}) => {
    const getColor = (name) => {
        if (name === 'Unfinished') {
            return '#4a235a'; 
        } else if (name === 'In progress') {
            return '#6fb8ff';
        } else {
            return '#2e7d32'; 
        };
    };

    return (
        <>
        <div className='tasks-container'>
        <div className='tasks-header'>
            <div className='header-name' style={{backgroundColor: getColor(name)}}>{name}</div>
            <div className='header-count'>{data.length}</div>
        </div>
            {data.map(({task, date, id}) => (
                <div key={id} className='task-item'>
                    <span>{task}</span>
                    <span className='date-text'>{date}</span>
                    <div className='buttons-container'>
                        <button ><img src={editImg} alt="" /></button>
                        <button onClick= {() => onDelete(id)}><img src={deleteImg} alt="" /></button>
                    </div>
                </div>
            ))}
        </div>


        </>
    );
};

export default TaskBox;