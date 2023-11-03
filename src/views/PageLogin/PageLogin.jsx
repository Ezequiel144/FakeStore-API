import loginStyle from './PageLogin.module.css';
import FormLogin from '../../components/FormLogin/FormLogin';

export default function PageLogin(){
    return(
        <div className={loginStyle.content}>
            <FormLogin />
        </div>
    )
}