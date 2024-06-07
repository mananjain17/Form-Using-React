// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Success from './Components/Success';


const App = () => {
    return (
        <>

        
        <Router>
            <Routes>
                <Route exact path="/" element={<Form />} />
                
                <Route path="/success" element={<Success />} />
            </Routes>
        </Router>


        </>
    );
};

export default App;
