import titleStyle from './Title.module.css';

export default function Title({titleMain}){
    return <h1 className={titleStyle.title}>{titleMain}</h1>
}