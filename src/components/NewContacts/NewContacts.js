import classes from './NewContacts.module.css';
import React, {useState} from 'react';

function NewContactsForm() {
  const [firstName, setFirstName] = useState("");
  const [emailName, setEmailName] = useState("");
  const [questionName, setQuestionName] = useState("");

  
  const [firstNameErr, setFirstNameErr] = useState({});
  const [emailNameErr, setEmailNameErr] = useState({});
  


 
  function submitHandler(event) {
    event.preventDefault();
    const isValid = formValidation();
    if(isValid){

      setFirstName("");
      setEmailName("");
      }
    }
    
    const formValidation = () =>{
      const firstNameErr = {};
      const emailNameErr = {};
     
      let isValid = true; 

      if(firstName.trim().length < 3){
        firstNameErr.firstNameShort = "Please enter valid name";
        isValid = false;
      }

      if(emailName.trim().length < 3){
        emailNameErr.emailNameShort = " Please enter valid email";
        isValid = false;
      }

      setFirstNameErr(firstNameErr);
      setEmailNameErr(emailNameErr);
      return isValid;

    }
  



  return (
     <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Name</label>
          <input type='text' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
        </div>
        {Object.keys(firstNameErr).map((key)=>{
          return <div style={{color: "red"}}>{firstNameErr[key]}</div>
        })}
        <div className={classes.control}>
          <label> Email </label>
          <input type='text' value={emailName} onChange={(e)=>{setEmailName(e.target.value)}}/>
        </div>
        {Object.keys(emailNameErr).map((key)=>{
          return <div style={{color: "red"}}>{emailNameErr[key]}</div>
        })}
        <div className={classes.control}>
          <label> Questions </label>
          <textarea id='description' value={questionName} onChange={(e)=>{setQuestionName(e.target.value)}}/>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    
  );
}

export default NewContactsForm;