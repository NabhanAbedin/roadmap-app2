import {Routes, Route } from 'react-router-dom';
import RoadMap from './roadmap';
import Home from './home';


const App = () => {
    return  (
        <Routes>
            <Route path='/' element={<Home/>} />
             <Route path='/roadmap' element={<RoadMap/>} />
        </Routes>
    );

};

export default App;