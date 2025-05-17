import '../../styles/progressBar.css';

const ProgressBar = ({ taskList, length, label }) => {
    const percentage = length === 0 ? 0 : (taskList.length / length) * 100;

    const getColor = (name) => {
        if (name === 'Unfinished') {
            return '#9b59b6'; 
        } else if (name === 'In Progress') {
            return '#3498db';
        } else if (name === 'Completed') {
            return ' #2ecc71'; 
        };
    };

    return (
        <div className='progress-container'>
            <p>{label}</p>
            <div className='progress-bar'>
                <div className='progress-bar-fill'
                 style={{ width: `${percentage}%`, backgroundColor: getColor(label) }}
                >
                </div>
            </div>
            <p>{taskList.length}/{length}</p>

        </div>
    );
};


export default ProgressBar;
