import React, {useState} from 'react'

function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");
    const [formComplete, setFormComplete] = useState(false)
    


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setFormComplete( true );
    };
    
    const formMessage = () => {
        if( formComplete ) {
	        return ("Thank you for submitting the form!") ;
	} else {
	    return ("Welcome, please submit the form");
	}
    };
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(firstName.length < 1){
            setFirstNameError("Must Enter a First Name")
        }
        else if(firstName.length < 3){
            setFirstNameError("First name must be at least 3 characters.");
        }
        else{
            setFirstNameError("");
        }
    }

    const handleLastNameError = (e) => {
        setLastName(e.target.value);
        if(lastName.length < 1){
            setLastNameError("Must Enter a Last Name")
        }
        else if(lastName.length < 2){
            setLastNameError("Last name must be at least 2 characters.");
        }
        else{
            setLastNameError("");
        }
    }

    const handleEmailError = (e) => {
        setEmail(e.target.value);
        if(email.length < 1){
            setEmailError("Must Enter Email")
        }
        else if(email.length < 5){
            setEmailError("Email must be at least 5 characters.");
        }
        else{
            setEmailError("");
        }
    }

    const handlePasswordError = (e) => {
        setPassword(e.target.value);
        if(password.length < 8){
            setPasswordError("Password must be at least 8 characters.");
        }
        else{
            setPasswordError("");
        }
    }

    const handlePasswordConfirmError = (e) => {
        setPasswordConfirm(e.target.value);
        if(passwordConfirm != password){
            setPasswordConfirmError("Passwords do not match.")
        }
        else{
            setPasswordConfirmError("");
        }
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <p>{formMessage}</p>
                </div>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName}></input>
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{firstNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastNameError}></input>
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{lastNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={handleEmailError}></input>
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePasswordError}></input>
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handlePasswordConfirmError}></input>
                    {
                        passwordConfirmError ?
                        <p style={{color:'red'}}>{passwordConfirmError}</p> :
                        ''
                    }
                </div>
                <button type='submit'></button>
            </form>
            <h4>Your Form Data</h4>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {passwordConfirm}</p>
        </div>
    );
};


export default UserForm

