import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import classes from '../Layoute/Layoute.module.css'
const Layout = ()=>{
    return(
        <>
         <Header/>
         <div className={classes.layoute}>
         <Menu/>
         <Outlet/>
         </div>
         <Footer/>
        </>
    )
}

export default Layout;