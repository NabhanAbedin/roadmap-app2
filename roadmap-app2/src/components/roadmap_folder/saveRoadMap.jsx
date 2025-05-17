import {useState} from 'react';
import '../../styles/saveRoadMap.css';

const SaveRoadMap = ({roadMaps,setRoadMaps, taskList}) => {
    const [textValue, setTextValue] = useState('');
    
    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleClick = () => {
        const exists = roadMaps.some(r => r.roadmap === textValue);
        if (exists) {
            alert('you already have a roadmap with that name!');
        } else {
            setRoadMaps(prev => [...prev, {roadmap: textValue, tasks: taskList}]);
            setTextValue('');
            console.log(roadMaps);
        };
    };

    return (
        <div className='roadmap-save-container'>
            <input type="text" value={textValue} onChange={handleChange} placeholder='Enter the name of the roadmap'/>
            <button onClick={handleClick} className='save-button'>Save</button>
        </div>
    );
};


export default SaveRoadMap;