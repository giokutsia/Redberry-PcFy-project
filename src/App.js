import React from 'react';
import StartingPage from './views/startPage';
import FormPage from './views/formPage';
import PciInfo from './views/pages/userInfo';
import {
    
   Routes, Route
 } from "react-router-dom"


const App = () => {
    return (
        
         
         <div >
            <Routes>
                <Route path='/' element={<StartingPage />}/>
                <Route path='/forms/user-info' element={<FormPage />}/>
                <Route path='/forms/pc-info' element={<PciInfo />}/>
            </Routes>

        </div>
        
       
        
    );
};

export default App;