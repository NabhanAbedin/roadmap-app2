import {useState} from 'react';


const EditableProfileInput = (props) => {
    const [editable, setEditable] = useState(false);
    const [typing, setTyping] = useState(props.text);

    const makeEditable =() => {
        if (typing.trim()=== '') {
            setTyping(props.text);
        };
        setEditable(!editable);
    };

    const handleChange = (e) => {
        setTyping(e.target.value);
    };
    
    return (
        <div className='profile-input-containers'>
            <p>{props.title}</p>
            <input type="text" className={`profile-input ${editable ? 'active' : ''}`} value={typing} readOnly={!editable} onChange={handleChange}/>
            <div className='input-buttons'>
                <button onClick= {makeEditable}>
                    edit
                </button>
            </div>
        </div>



    );



};

export default EditableProfileInput;