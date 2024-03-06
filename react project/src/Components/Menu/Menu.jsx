import { NavLink, useLocation } from "react-router-dom"
import classes from "../Menu/Menu.module.css"
const menuData = [
    {
        title:'User Profile',
        path: '/'
    },
    {
        title:'ToDo',
        path: '/todo'
    },
    {
        title:'News',
        path: '/news'
    },
    {
        title:'Weather',
        path: '/Weather'
    },
    {
        title:'ToDo redux',
        path: '/todos/redux'
    },
]
const Menu = ()=>{
    const location = useLocation()
    return (
        <div className={classes.MenuRot}>
            <div className={classes.menu}>
            {
                menuData.map((e, index) => (
                    <NavLink style={{color: location.pathname === e.path ? "black" : '#fff',
                                    border:location.pathname === e.path ? '2px solid black': "#fff",
                                    backgroundColor:location.pathname === e.path ? '#fff':'#0f1a34'}} key={e} to={e.path}>{e.title}</NavLink>
                    ))
            }
            </div>
        </div>
    )
}

export default Menu