import React from 'react';
import { Link } from 'react-router-dom';

const StartingPage = () => {
    return (
        <div className=' realtiv bg-white w-full grid grid-cols-1 gap-2 '>
              <img className=' m-auto mt-[79px] w-[112px] h-[18px]' src= 'images/LOGO-02.png' alt='logo' /> 
              <div className='border-red-500 mt-5 w-[781px] h-[482px] desktop:hidden m-auto p-24' id='first'>
                    {/* <img className='mt-20' src= {frame}alt='logo' />   */}
                    <img src='images/Frame.png' alt='logo'/>
              </div>
              <div className='border-red-500 mt-5 w-[781px] h-[482px] tablet:hidden m-auto desktop:p-12'>
                    {/* <img className='mt-20' src= {frame}alt='logo' />   */}
                    <img src='images/Group.png' alt='logo'/>
              </div>

          
            <Link  to='/forms' className='m-auto font-sans font-["Helvetica Neue"] leading-[100%] desktop:w-[358px] tablet:w-[387px] h-[60px] bg-solidblue hover:bg-blue-700 text-white text-[20px]  py-[18px] px-4 rounded-[8px] text-center ' > <span>ჩანაწერის დამატება</span></Link>
            <Link  to='/forms' className='m-auto font-sans font-["Helvetica Neue"] leading-[100%] desktop:w-[358px] tablet:w-[387px] h-[60px] bg-solidblue hover:bg-blue-700 text-white text-[20px]  py-[18px] px-4 rounded-[8px] text-center ' > <span>ჩანაწერის სია</span></Link>
        </div>
    );
};

export default StartingPage;