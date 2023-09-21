import titleStyle from './Title.module.css';

// eslint-disable-next-line react/prop-types
export default function Title({titleMain}){
    return <h1 className={titleStyle.title}>{titleMain}</h1>
}