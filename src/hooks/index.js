import  {useState, useEffect}  from "react";
// import dataServices from "../services/axiosDataFetch";
import {omit} from "lodash"



const useForm = () => {
    const [value, setValue] = useState(0)
    const [inputValue, setInputValue] = useState(
      {
        first_name:'',
        last_name:'',
        team_id : '',
        position_id:'',
        email:'',
        phone:'',

       
      }
    
    
    )
    const [error, setError] = useState({
   
    })
  
    const validationInput = ( name, value) => {
      switch (name) {
        case 'first_name':
          if (!new RegExp(/^([\u10D0-\u10F0]+)$/).test(value)){
            setError({
              ...error,
              first_name:"ქართული ასოები"
            })
          }else  if (value.length < 2 || value === '') {
            setError({
              ...error,
              first_name:"მინიმუმ 2 სიმბლოლო"
            })
          
          
          }else {
              const newObj = omit(error, "first_name")
              setError(newObj)
          }
          break;
        case 'last_name':
          if (!new RegExp(/^([\u10D0-\u10F0]+)$/).test(value)) {
            setError({
              ...error,
              last_name: "ქართული ასოები"
            })
          }
          else if( value.length < 2 ) {
            setError({
              ...error,
              last_name:"მინიმუმ 2 სიმბლოლო"
            }) 
          
         
          }else{
              const newObj = omit(error, "last_name")
              setError(newObj)
          }
          
          break;
        case 'email':
          if(
             !new RegExp(/^([A-Za-z0-9_\-.])+@([redberry])+.(ge)$/).test(value)
             ) {
               setError ({
                 ...error,
                 email: "უნდა მთავრდებოდეს @redberry.ge-ითl"
               })
               
             }else {
               const newObj = omit(error, 'email')
               setError(newObj)
             }
          break;
        case 'phone':
          if(
            
            !new RegExp(/^(\+?995)?(79\d{7}|5\d{8})$/
           
            ).test(value)
            ){
            setError({
              ...error,
              phone:"უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
            })
            
          }else{
            const newObj = omit(error, 'phone')
            setError(newObj)
          }
          break;
          
        default:
          const newObj = omit(error, '')
          setError(newObj)
          break;
      }
  }


  const validationInputSubmit = (value) => {
    const err = {}
        if (value.first_name.length < 2 || value.first_name === '') {
          
          
            err.first_name="მინიმუმ 2 სიმბლოლო"
         
          
        }else if (!new RegExp(/^([\u10D0-\u10F0]+)$/).test(value.first_name)){
          
            err.first_name="ქართული ასოები"
          
        }
      
        if( value.last_name.length < 2 ) {
          
            err.last_name="მინიმუმ 2 სიმბლოლო"
         
        }else if (!new RegExp(/^([\u10D0-\u10F0]+)$/).test(value.last_name)) {
         
         
            err.last_name= "ქართული ასოები"
          
        }
       
        
     
        if(
           !new RegExp(/^([A-Za-z0-9_\-.])+@([redberry])+.(ge)$/).test(value.email)
           ) {
             
               err.email= "უნდა მთავრდებოდეს @redberry.ge-ითl"
             
           }
     
        if(
          
          !new RegExp(/^(\+?995)?(79\d{7}|5\d{8})$/
         
          ).test(value.phone)
          ){
          
            err.phone="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
          
        }
        return err
        }
   
  
  
    const handleChange = (e) => {
      
      const name = e.target.name
      const newValue = e.target.value
      
      
      validationInput(name, newValue)
     
      setInputValue({
        ...inputValue,
        [name] : newValue
      })
      
      
      localStorage.setItem("inputvalues", JSON.stringify({...inputValue, [name] : newValue}));
      
    
    }
 

  
    const validateNavButt = (name) => {
        
         console.log(inputValue.team_id)
        if(name === 'forward') {
          
         if(inputValue.first_name.length > 2 
          && new RegExp(/^([\u10D0-\u10F0]+)$/).test(inputValue.first_name)
          && inputValue.last_name.length > 2 
          && new RegExp(/^([\u10D0-\u10F0]+)$/).test(inputValue.last_name)
          && inputValue.team_id.length > 0 && inputValue.position_id.length >0
          &&  new RegExp(/^([A-Za-z0-9_\-.])+@([redberry])+.(ge)$/).test(inputValue.email)
          &&  new RegExp(/^(\+?995)?(79\d{7}|5\d{8})$/).test(inputValue.phone)
          // && other inputs
          )
          {
          setValue(prev=> prev + 1)
          
         }else {
          
          setError(validationInputSubmit(inputValue))
         }
         
          
          
      
        }
      
    }

    console.log(inputValue)


    const handleNavigation = (e) => {
      e.preventDefault();
      const name = e.target.name
     
      
     validateNavButt(name)
    
    
     
      

      
      
    }
console.log(error)
Object.keys(error).map(i => console.log(error[i]))

  


  
    return {
      value, 
      inputValue,
      error,
      setInputValue,
      handleNavigation ,
      handleChange,
      
    }
  }
 
  export default useForm
 
