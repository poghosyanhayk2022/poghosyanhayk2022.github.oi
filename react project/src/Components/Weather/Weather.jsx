import classes from '../Weather/Weather.module.css'
import searchicon from '../../images/search-icon-png-21.png'
import clear from '../../images/5507757-200.png'
import cloud from '../../images/6122714.png'
import drizzle from '../../images/2412691.png'
import rain from '../../images/263883.png'
import snow from '../../images/6661508.png'
import wind from '../../images/3731279.png'
import humidity from '../../images/4148460.png'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
const Weather = ()=>{
   const inputRef = useRef()
    let apiKey = '3361c47f22972f982bddf242d0b82cfd'
    const [weaderData, setweaderData] = useState()
    const [wicon,setWicon] = useState(cloud)

    const search = async ()=>{
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value ||"Erevan"}&units=Metric&appid=${apiKey}`
         let response = await fetch(url)
         let res = await response.json()
         let data =res
         console.log(res);
         if (res.cod === 200) {
             setweaderData(data);
         } else {
            toast.error(res.message)
         }
if(  weaderData && weaderData.weather?.length){
    if(weaderData?.weather[0]?.icon === '01d' || weaderData?.weather[0]?.icon === '01n'){
    setWicon(clear)
    }
    else if(weaderData?.weather[0]?.icon === '02d' || weaderData?.weather[0]?.icon === '02n')
    {
     setWicon(cloud)
    }
    else if(weaderData?.weather[0]?.icon === '03d' || weaderData?.weather[0]?.icon === '03n')
    {
     setWicon(drizzle)
    }
    else if(weaderData?.weather[0]?.icon === '04d' || weaderData?.weather[0]?.icon === '04n')
    {
     setWicon(drizzle)
    }
    else if(weaderData?.weather[0]?.icon === '09d' || weaderData?.weather[0]?.icon === '09n')
    {
     setWicon(rain)
    }
    else if(weaderData?.weather[0]?.icon === '10d' || weaderData?.weather[0]?.icon === '10n')
    {
     setWicon(rain)
    }
    else if(weaderData?.weather[0]?.icon === '13d' || weaderData?.weather[0]?.icon === '13n')
    {
     setWicon(snow)
    }else{
     setWicon(clear)
    }
}
    }

    useEffect(() => {
        search()
    },[])

    return(
        <div className={classes.conteinerRoot}>
            <div className={classes.conteiner}>
            <div className= {classes.weatherBlock}>
            <div className={classes.topBar}>
             <input type="text" className={classes.cityinput} ref={inputRef}  id="cityinput" placeholder='Search' />
             <div className={classes.SearchIcon} onClick={()=>{search()}}>
                <img src={searchicon} alt="" />
             </div>
            </div>
            <div className={classes.weatherImg}>
               <img src={wicon} alt="" />
            </div>
            <div className={classes.weaterTemp}>{weaderData && weaderData?.main?.temp}</div>
            <div className={classes.weaterLoaction}>{weaderData && weaderData?.name}</div> 

    <div className={classes.dataContainer}>
            <div className={classes.element}>
                <img src={humidity} className={classes.icon} alt="" />
                <div className={classes.data}>
                    <div className={classes.humidityParsent}>{weaderData?.main?.humidity || 0+'%'}</div>
                    <div className={classes.text}>Humidity</div>
                </div>
            </div>

            <div className={classes.element}>
                <img src={wind} className={classes.icon} alt="" />
                <div className={classes.data}>
                    <div className={classes.wind}>{ weaderData?.wind?.speed || 0 + 'km/h'}</div> 
                    <div className={classes.text}>windSped</div>
                    </div>
                </div>
         </div>


            </div>
            </div>
        </div>
    )
}
export default Weather