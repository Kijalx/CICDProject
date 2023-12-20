import {useRef, useState} from "react";

import classes from '../books/NewBookForm.module.css';
import Card from "../ui/Card";
import Link from "next/link";
import {instantiateEmscriptenWasm} from "next/dist/server/lib/squoosh/emscripten-utils";

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

    const [input , setInput] = useState({
        email:'',
        password: '',
        confirmPassword: ''
    })

    const [error , setError] = useState({
        email:'',
        password: '',
        confirmPassword: ''
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
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password adn Confirm Password are not the same";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "": error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if(!value){
                        stateObj[name] = "Please enter a password";
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password are not the same";
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
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id ='name'
                        placeholder='Enter your Name...'
                        ref={nameInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Create Password:</label>
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
                <div className={classes.control}>
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input
                        type='password'
                        id ='confirmPassword'
                        name = 'confirmPassword'
                        value={input.confirmPassword}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        placeholder='Enter your password again...'
                        required
                        ref={passwordConfirmInputRef}></input>
                    {error.email && <span className={classes.err}>{error.confirmPassword}</span>}

                </div>
                <div className={classes.actions}>
                    <button>Submit</button>

                </div>
            </form>
            <div className={classes.link}>
                <div>Already have an Account?</div>
                <Link href='/login-user'>Login here</Link>
            </div>
        </Card>
    );
}

export default NewUser;
