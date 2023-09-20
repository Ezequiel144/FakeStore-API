import headerStyle from './Header.module.css';

/* const navbar = [
    {
        id : 1,
        title: 'Home',
    },
    {
        id : 2,
        title:'Products',
    },
    {
        id : 3,
        title:'Contact',
    }
];
 */
export default function Header(){
    return(
        <header className={headerStyle.header}>
            <div className={headerStyle.logo}>
                <img src="" alt="ImgLogo"/>
            </div>
            {/* <ul className={headerStyle.list}>
                {
                    navbar.map(data => {
                        return <li key={data.id} className={headerStyle.item}>{data.title}</li>
                    })
                }
            </ul> */}
            <div className={headerStyle.contentUserCart}>
                <img src="" alt="User" />
                <img src="" alt="Cart" />
            </div>
        </header>
    )
}