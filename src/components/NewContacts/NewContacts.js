import classes from './NewContacts.module.css';

function NewContactsForm() {
  function submitHandler(event) {
    event.preventDefault();

    if(`title` < 0){
      console.log("Please input name")
    }
    return;
    
  }

  return (
     <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Name</label>
          <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='phonenumber'>Phone Number</label>
          <input type='text' required id='phonenumber' />
        </div>
        <div className={classes.control}>
          <label htmlFor='emailaddress'>Email Address</label>
          <input type='text' required id='emailaddress' />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Questions?</label>
          <textarea id='description' required rows='5'></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    
  );
}

export default NewContactsForm;