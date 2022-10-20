import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./display.css"
export default function DisplayInfo(props) {
    const [date, setDate] = useState(null);
   
    useEffect(() => {
        const lat = props.res.coord.lat;
        const long = props.res.coord.lon;
        axios.get(`https://api.ipgeolocation.io/timezone?apiKey=0f1eac7839004664bca1450e6408cce7&lat=${lat}&long=${long}`)
            .then((res) => {
                console.log(res)
                setDate(res);
            })

    },[props.res])



    return (


        <div>
            <div className='center'>
                {console.log(props.res)}
                <div className='C1'>


                    <div className='first'>
                        <div>{props.res.main.temp} °C</div>
                        <div>{props.res.weather[0].main}</div>
                        <div>min : {props.res.main.temp_min} °C</div>
                        <div>max : {props.res.main.temp_max} °C</div>

                    </div>

                    <div className='second'>

                        <div className='c2'>
                            <div className='small'>{props.res.name}</div>
                            {date != null && <div>{date.data.date}</div>}
                            {date != null && <div>{date.data.date_time_txt.split(' ')[0]}</div>}
                            {date != null && <div>{date.data.time_12}</div>}


                        </div>

                        <div className='c2'>
                            <div className='small'> Humidity : {props.res.main.humidity} %</div>
                            <div className='small'> Wind Speed : {props.res.wind.speed} km/h </div>
                            <div className='small'> Pressure : {props.res.main.pressure} mbar</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
