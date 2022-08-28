import React from 'react';
import StartingPage from './views/startPage';
import FormPage from './views/formPage';
import {
    
   Routes, Route
 } from "react-router-dom"


const App = () => {
    return (
        
         
         <div >
            <Routes>
                <Route path='/' element={<StartingPage />}/>
                <Route path='/forms' element={<FormPage />}/>
            </Routes>

        </div>
        
       
        
    );
};

export default App;