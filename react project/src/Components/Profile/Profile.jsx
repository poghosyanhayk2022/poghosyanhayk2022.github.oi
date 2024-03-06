import img from '../../images/profile-2092113_1280 (1).png'
import classes from '../Profile/Profile.module.css'
const Profile = () => {
  const {userName, location, gender} = JSON.parse(localStorage.getItem('userData'));
    return (
        <div className={classes.dashboard}>
          <div className={classes.profile}>
            
            <img src={img} alt="" />
            <div className={classes.name}>
            <h1>Name - {userName}</h1>
            <p> Country - {location}</p>
            <p> Gender - {gender}</p>
           
            </div>
          </div>
      </div>
    )
}

export default Profile