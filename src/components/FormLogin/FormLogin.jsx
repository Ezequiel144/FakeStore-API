import formLoginStyle from './FormLogin.module.css'
import { Link } from 'react-router-dom'

export default function FormLogin(){
    return(
        <div className={formLoginStyle.contentFormLogin}>
            
            <form className={formLoginStyle.fomulary} action="">
                <h1 className={formLoginStyle.title}>login</h1>
                <section className={formLoginStyle.contentLogin}>
                    <input type="email" name='email'/>
                    <input type="password" name='password' />
                    <button>login</button>
                    <button>login google</button>
                </section>
                <section>
                    <Link to='/register'>register</Link>
                </section>
            </form>
        </div>
    )
}