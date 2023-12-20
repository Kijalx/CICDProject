import {useRef, useState} from "react";

import classes from '../books/NewBookForm.module.css';
import Card from "../ui/Card";
import Link from "next/link";

function NewUser(props) {
    const emailInputRef = useRef();
    const nameInputRef= useRef();
    const passwordInputRef= useRef();
    const passwordConfirmInputRef= useRef();
    function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredConfirmPassword = passwordConfirmInputRef.current.value;


        const UserData = {
            email: enteredEmail,
            name: enteredName,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
        };

        props.onAddUser(UserData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' id ='email' placeholder='Enter your student Email...' required ref={emailInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Email:</label>
                    <input type='text' id ='name' placeholder='Enter your Name...' required ref={nameInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Create Password:</label>
                    <input type='password' id ='password' required ref={passwordInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input type='password' id ='confirmPassword' required ref={passwordConfirmInputRef}></input>
                </div>

                <div className={classes.actions}>
                    <button>Submit</button>

                </div>
            </form>
            <div className={classes.link}>
                <div>Already have a User?</div>
                <Link href='/login-user'>Login here</Link>
            </div>
        </Card>
    );
}

export default NewUser;
