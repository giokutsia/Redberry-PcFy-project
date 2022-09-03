import React from 'react';
import DataServices from '../../services/axiosDataFetch';
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';


const UserInfo = ({inputValue, handleChange, error, setInputValue, handleNavigation, value}) => {
    
    const [team, setTeam] = useState([])
    const [position, setPosition] = useState([])
    

    useEffect (() => {
        DataServices
          .getAll('https://pcfy.redberryinternship.ge/api/teams')
          .then(initialTeam => {
            //console.log(initialSkills)
            setTeam(initialTeam.data)
          
          })
        DataServices
        .getAll('https://pcfy.redberryinternship.ge/api/positions')
        .then(initialPosition => {
            setPosition(initialPosition.data)
        })
     
       
    }, [])
    useEffect (() => {
        const items = JSON.parse(localStorage.getItem('inputvalues'));
         if (items) {
            setInputValue(items);
        }
       
    }, [setInputValue])
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue)
    }


const filteredPos = position.filter((position) => position.team_id === Number(inputValue.team_id))



    
    return (
        <div className='w-[1920] h-[1080]'>
            
           
            {/* <div className='m-auto border-2 border-red-500 w-[50%] grid grid-cols-2 '>
                <ul className='flex  '>
                    <li className=''>თანამშრომლის ინფო</li>
                    <li>ლეპტოპის მახასიათებლები</li>
                </ul>
            </div> */}

            <div className='w-[1226px] h-[953px] rounded-[18px] bg-white'>
                <form className='w-full h-full' >
                    <div className='flex flex-wrap justify-evenly w-full min-h-[139] m-auto  '>
                        <div className='mt-[30px] text-red-500' id='სახელი'>
                            <label className= {`font-medium text-[18px] font-sans ${error.first_name ? "text-errred" : ""}`} >სახელი</label>
                            <input value={inputValue.first_name}  onChange={handleChange}
                                className={`block w-full bg-gray-200 text-gray-700 border-[1.8px] border-lightblue rounded py-3 px-4 mb-3 ${error.first_name ? "border-errred" : ""}` } name='first_name'  />
                            {error.first_name ? <p className="text-errred text-xs">{error.first_name} </p> : inputValue.first_name==='' ? <p className="text-red-500 text-xs">მინიმუმ 2 სიმბლოლო, ქართული ასოები</p> : ''}
                        </div>
                        <div className='block mt-[30px]' id='გვარი'>
                                
                            <label className={`font-medium text-[18px] font-sans ${error.last_name ? "text-errred" : ""}`} >გვარი</label>
                            <input value={inputValue.last_name} onChange={handleChange}
                                className={`block w-full bg-gray-200 text-gray-700 border-[1.8px] border-lightblue rounded py-3 px-4 mb-3 ${error.last_name ? "border-errred" : ""}` } name='last_name'  />
                            {error.last_name ? <p className="text-errred text-xs">{error.last_name} </p> : inputValue.last_name==='' ? <p className="text-red-500 text-xs">მინიმუმ 2 სიმბლოლო, ქართული ასოები</p> : ''}
                        </div>
                    </div>
                        
                        <div className='grid grid-cols-1 gap-[53px] mt-[53px]' >
                            <select className={`w-[878px] h-[60px] m-auto rounded-[8px]  bg-easygray ${error.team_id ? "border-2 border-errred" : ""}`} name='team_id' value={inputValue.team_id || "თიმი"} onChange={handleChange}>
                         
                                <option className='bg-white' disabled>თიმი</option>
                                {
                                    team && team.map(i => 
                                        <option className='bg-white'  key={i.id} value={i.id}>{i.name}</option>
                                        
                                        )
                                    }
                            </select>
                            
                        
                            <select className={`w-[878px] h-[60px] m-auto rounded-[8px]  bg-easygray ${error.position_id ? "border-2 border-errred" : ""}`} value={inputValue.position_id || "პოზიცია"}   name='position_id' onChange={handleChange}>
                                <option className='bg-white' disabled>პოზიცია</option>
                            {   
                                filteredPos &&
                                    filteredPos.map(i => 
                                        <option className='bg-white' id={i.id} key={i.id} value={i.id}>{i.name}</option>
                                        
                                        )
                                }
                            </select>
                            <div className='grid grid-cols-1 justify-evenly w-[878px]  m-auto  '>
                                 <div className='mt-[30px] ' id='email'>
                                    <label className='' >მეილი</label>
                                    <input value={inputValue.email}  onChange={handleChange}
                                        className={`block w-full bg-gray-200 text-gray-700 border-[1.8px] border-lightblue rounded py-3 px-4 mb-3 ${error.email ? "border-errred" : ""}` }  name='email'  />
                                    {error.email ? <p className="text-red-500 text-xs"> {error.email} </p> : inputValue.email==='' ? <p className="text-red-500 text-xs">უნდა მთავრდებოდეს @redberry.ge-ით</p> : ''}
                                </div>
                                <div className='block mt-[30px]' id='phone'>
                                
                                    <label className='block'>ტელეფონის ნომერი</label>
                                    <input value={inputValue.phone} onChange={handleChange}
                                        className={`block w-full bg-gray-200 text-gray-700 border-[1.8px] border-lightblue rounded py-3 px-4 mb-3 ${error.phone ? "border-errred" : ""}` } name='phone'  />
                                    {error.phone ? <p className="text-red-500 text-xs">{error.phone} </p> : inputValue.phone==='' ? <p className="text-red-500 text-xs">უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p> : ''}
                                </div>
                            </div>
                        </div>
                        <div className='grid justify-end  w-[878px] m-auto py-7 px-5  mt-10'>

                           
                            <button name='forward' type='submit' onClick={handleNavigation}
                             className='bg-solidblue w-[176px] h-[60px] rounded-[8px] hover:solidblue text-white font-bold py-2 px-4 '>შემდეგი</button>
                             
                        
                        </div> 
                </form>

                
                
                    

            </div>
       

                    <div className='w-full'>
                        <img className='m-auto mt-4 w-[85px] h-[85]' src='images/LOGO-10 2.png' alt='bottom_logo'></img>
                    </div>

         

        </div>
       
        
    );
};

export default UserInfo;