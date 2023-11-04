import FormRegister from '../../components/FormRegister/FormRegister'
import registerStyle from './PageRegister.module.css'

export default function PageRegister(){
    return(
        <div className={registerStyle.content}>
            <FormRegister />
        </div>
    )
}