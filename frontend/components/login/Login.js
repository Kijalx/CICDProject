import {useRef, useState} from "react";

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

    const [input , setInput] = useState({
        email:'',
        password: ''
    })

    const [error , setError] = useState({
        email:'',
        password: ''
    })

    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e => {
        let {name, value} = e.target;
        setError(prev => {
            const stateObj = {...prev, [name]: ""};

            switch (name){
                case "email":
                    if(!value){
                        stateObj[name] = "Please enter a valid student email";
                    }
                    break;

                case "password":
                    if(!value){
                        stateObj[name] = "Please enter a password";
                    }
                    break;

                default:
                    break;
            }
            return stateObj;
        })
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='text'
                        id ='email'
                        name = 'email'
                        value={input.email}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        placeholder='Enter your student Email...'
                        required
                        ref={emailInputRef}></input>
                    {error.email && <span className={classes.err}>{error.email}</span>}
                </div>

                <div className={classes.control}>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id ='password'
                        name='password'
                        value={input.password}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        placeholder='Enter your password...'
                        required
                        ref={passwordInputRef}></input>
                    {error.email && <span className={classes.err}>{error.password}</span>}
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
