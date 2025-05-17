import {useState} from 'react';
import '../styles/roadmap.css';
import alignImg from '../images/align_9626440.png';
import RoadMapTab from './roadmap_folder/roadmaptab';
import OffScreenMenu from './roadmap_folder/offScreenMenu';
import SettingsTab from './settings_folder/settingsTab';
import OverviewTab from './overview_folder/overviewTab';



const RoadMap = () => {
    const [selected, setSelected] = useState('roadmap');
    const [taskList, setTaskList] = useState([]);
    const [roadMaps, setRoadMaps] = useState([]);
    

    const renderComponent = () => {
        switch (selected) {
            case 'roadmap':
                return <RoadMapTab taskList={taskList} setTaskList={setTaskList} roadMaps={roadMaps} setRoadMaps={setRoadMaps}/>
            case 'settings':
                return <SettingsTab />
            case 'overview':
                return <OverviewTab taskList={taskList}/>
            default:
                return <RoadMapTab />
        }
    }
    return (
        <>
            <OffScreenMenu />
            <div className = 'info-container'>
                
                <div className='title-container'>
                    <img src={alignImg} alt="" />
                    <span className='title'>Roadmap</span>
                </div>
                <span className='subtitle'>where your goals meet deadlines</span>
            </div>

            <div className='nav-buttons'>
                <button onClick={() => {setSelected('roadmap')}} className={selected === 'roadmap' ? 'active' : ''}>Road Map</button>
                <button onClick={() => {setSelected('settings')}} className={selected === 'settings' ? 'active' : ''}>Settings</button>
                <button onClick={() => {setSelected('overview')}} className={selected === 'overview' ? 'active' : ''}>Overview</button>
            </div>

            <div className='tab-container'>
                {renderComponent()}
            </div>

        </>
    )
}


export default RoadMap;