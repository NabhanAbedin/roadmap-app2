import '../../styles/settings.css';
import Profile from './profile';
import ToggleTheme from './toggleTheme';
import ProfilePic from './profilePic';

const SettingsTab = () => {

    return (
        <div className="settings-wrapper">
            <div className='settings-container'>
                <Profile />
                <ToggleTheme/>
            </div>
            <ProfilePic />
        </div>
    );
};



export default SettingsTab;