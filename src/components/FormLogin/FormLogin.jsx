import { useState } from 'react'
import formLoginStyle from './FormLogin.module.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';

export default function FormLogin(){
    const auth = useAuth() 
    const [emailLogin,setEmailLogin] = useState(" ");
    const [passwordLogin,setPasswordLogin] = useState(" ");

    function handleChangeEmail(e){
        const {value} = e.target;
        setEmailLogin(value)
    }
    console.log(emailLogin);

    function handleChangePassword(e){
        const {value} = e.target;
        setPasswordLogin(value)
    }
    console.log(passwordLogin);

    function handleSubmit(e){
        e.preventDefault()
        auth.login(emailLogin,passwordLogin)
    }

    function handleSubmitGoogle(e){
        e.preventDefault();
        auth.loginGoogle();
    }

    return(
        <div className={formLoginStyle.contentFormLogin}>
            <form className={formLoginStyle.formulary} action="">
                <h1 className={formLoginStyle.title}>login</h1>
                <section className={formLoginStyle.contentLogin}>
                    <input className={formLoginStyle.input} placeholder='Gmail' type="email" name='email' onChange={handleChangeEmail}/>
                    <input className={formLoginStyle.input} placeholder='Password' type="password" name='password' onChange={handleChangePassword} />
                    <button className={formLoginStyle.buttonLogin} onClick={handleSubmit}>Login</button>
                    <button className={formLoginStyle.buttonLoginGoogle} onClick={handleSubmitGoogle}>Login google</button>
                </section>
                <section>
                    <Link className={formLoginStyle.register} to='/register'>Register</Link>
                </section>
            </form>
        </div>
    )
}