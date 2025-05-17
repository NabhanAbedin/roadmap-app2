import EditableProfileInput from "./editableProfileInput";

const Profile = () => {

    return (
        <div className='profile-container'>
                <h1>Profile</h1>
                <EditableProfileInput text={'example@gmail.com'} title={'Email'}/>
                <EditableProfileInput text={'SirSigma'} title={'Username'}/>
                <EditableProfileInput text={'******'} title={'Password'}/>
             </div>
    );
};


export default Profile;