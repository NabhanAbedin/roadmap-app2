
import blankPfpImg from '../../images/blankpfp.jpg';


const ProfilePic = () => {

    return (
        <>
        <div className='profile-pic-container'>
            <h1>Picture</h1>
            <div className='profile-image'>
                <img src={blankPfpImg} alt="" />
            </div>
            <div className='profile-buttons'>
                <button>
                    edit
                </button>
                <button>
                    save
                </button>
            </div>
        </div>
        </>
    );
};


export default ProfilePic;