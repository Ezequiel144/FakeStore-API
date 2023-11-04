import formRegisterStyle from './FormRegsiter.module.css'
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext'; 
import { Link } from 'react-router-dom';

export default function FormRegister(){
    const auth = useAuth();
    const [emailRegister,setEmailRegister] = useState(" ");
    const [passwordRegister,setPasswordRegister] = useState(" ")

    function handleChangeEmail(e){
        const {value} = e.target;
        setEmailRegister(value);
    }
    /* console.log(emailRegister); */

    function handleChangePassword(e){
        const {value} = e.target;
        setPasswordRegister(value);
    }
    /* console.log(passwordRegister); */

    function handleSubmit(e){
        e.preventDefault();
        auth.register(emailRegister,passwordRegister);
    }

    return (
        <div className={formRegisterStyle.contentFormRegister}>
            <form className={formRegisterStyle.contentForm} action="" onSubmit={handleSubmit}>
                <h1 className={formRegisterStyle.title}>register</h1>
                <section className={formRegisterStyle.contentInputs}>
                    <input placeholder='Email' className={formRegisterStyle.input} type="email" name='emailRegister' onChange={handleChangeEmail}/>
                    <input placeholder='Password' className={formRegisterStyle.input} type="password" name='PasswordREgister' onChange={handleChangePassword}/>
                    <input className={formRegisterStyle.buttonSubmit} type='submit'  value={'Register'} />
                </section>
                <section>
                    <Link className={formRegisterStyle.login} to='/login'>Login</Link>
                </section>
            </form>
        </div>
    )
}