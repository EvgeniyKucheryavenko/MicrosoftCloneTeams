import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Calls from "./components/calls";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Calls/>}/>
            </Routes>
        </>
    );
};

export default App;