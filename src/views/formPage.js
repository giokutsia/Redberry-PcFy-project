import React from 'react';
import useForm from '../hooks';
import UserInfo from './pages/userInfo';
import PciInfo from './pages/pcInfo';

const FormPage = () => {
    const {handleChange,  inputValue, error, setInputValue ,handleNavigation, value} = useForm()
    const showFormsByPages = () => {
        switch(value){
            case 0:
                return <UserInfo handleChange={handleChange} 
                inputValue={inputValue} 
                setInputValue={setInputValue} 
                error={error} handleNavigation={handleNavigation}/>
            case 1:
                return <PciInfo handleChange={handleChange} 
                inputValue={inputValue} 
                setInputValue={setInputValue} 
                error={error} handleNavigation={handleNavigation}/>
            default:
                return ''
        }
    }
    return (
        
        <div className=' realtive bg-easygray w-full h-[1080px] grid grid-cols-1 '>
            <div className='m-auto'>
            {showFormsByPages()}
            </div>
              
        </div>
    );
};

export default FormPage;