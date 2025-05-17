import {useState} from 'react';
import '../../styles/offscreenmenu.css';
import hamburgerImg from '../../images/hamburgerP.png';
import {Link} from 'react-router-dom';


const OffScreenMenu = () => {
    const [active, setActive] = useState(false);

    const handleClick =() => {
        setActive(!active);
    }

    return (
       <>
        <button onClick={handleClick} className='burger-icon'
        style={active ? {position: 'fixed'}: {}}
        ><img src={hamburgerImg} alt="" /></button>
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