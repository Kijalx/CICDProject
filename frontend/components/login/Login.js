import {useRef} from "react";

import classes from '../books/NewBookForm.module.css';
import Card from "../ui/Card";
import Link from "next/link";

function Login(props) {
    const emailInputRef = useRef();
    const passwordInputRef= useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const UserData = {
            email: enteredEmail,
            password: enteredPassword,
        };

        props.onAddUser(UserData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' id ='email' required ref={emailInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id ='password' required ref={passwordInputRef}></input>
                </div>

                <div className={classes.actions}>
                    <button>Submit</button>
                </div>
            </form>
            <div className={classes.link}>
                <div>Dont have an Account?</div>
                <Link href='/new-user'>Create one here</Link>
            </div>
        </Card>
    );
}

export default Login;
