import classes from  "../Header/Header.module.css"

const Header = ()=>{
  const {userName} = JSON.parse(localStorage.getItem('userData'));

    const handleLogout = () => {
        localStorage.removeItem('userData')
        window.location.assign('/login')
      }
    return (
        <div className={classes.HeaderRot}>
          <p className={classes.logo}>news</p>
        <h1>Welcome, {userName}</h1>
        <button className={classes.button} onClick={handleLogout}>Logout</button>
      </div>
    )
        
    
}
 export default Header