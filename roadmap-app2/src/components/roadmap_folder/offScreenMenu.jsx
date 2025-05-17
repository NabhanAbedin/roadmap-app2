import {useContext, useState} from 'react';
import '../../styles/offscreenmenu.css';
import hamburgerImg from '../../images/hamburgerP.png';
import {Link} from 'react-router-dom';
import hamburgerBlackImg from '../../images/hamburgerBlack.png';
import { ThemeContext } from '../settings_folder/ThemeContext';


const OffScreenMenu = () => {
    const [active, setActive] = useState(false);
    const {theme} = useContext(ThemeContext);

    const handleClick =() => {
        setActive(!active);
    }

    return (
       <>
        <button onClick={handleClick} className='burger-icon'
        style={active ? {position: 'fixed'}: {}}
        ><img src={theme === 'dark' ? hamburgerImg : hamburgerBlackImg} alt="" /></button>
        <div className={`off-screen-menu ${active ? 'active': ''}`}>
            <div className='links-container'>
                <Link to='/'>Home</Link>
                <Link to='/roadmap'>Roadmap</Link>
            </div>
        </div>
       </>
        
    );
};


export default OffScreenMenu;