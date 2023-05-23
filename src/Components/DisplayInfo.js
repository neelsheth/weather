import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./display.css"


export default function DisplayInfo(props) {
    const [date, setDate] = useState(null);

    //for display date according to logitude-latitude
    useEffect(() => {
        const lat = props.res.coord.lat;
        const long = props.res.coord.lon;
        axios.get(`https://api.ipgeolocation.io/timezone?apiKey=0f1eac7839004664bca1450e6408cce7&lat=${lat}&long=${long}`)
            .then((res) => {
                setDate(res);
            })
    }, [props.res])


    return (
        <div>
            <div className='center'>

                {/* first  circle displaying current temperature,max temperature , min temperature of day*/}
                <div className='C1'>
                    <div className='first'>
                        <div className='big'>{props.res.main.temp} °C</div>
                        <div className='small'>{props.res.weather[0].main}</div>
                        <div className='small'>min : {props.res.main.temp_min} °C</div>
                        <div className='small'>max : {props.res.main.temp_max} °C</div>
                    </div>

                    {/* second circle displaying city , date , time ,day*/}
                    <div className='second'>
                        <div className='c2 city'>
                            <div className='big'>{props.res.name}</div>
                            {date != null && <div className='small'>{date.data.date}</div>}
                            {date != null && <div className='small'>{date.data.date_time_txt.split(' ')[0]}</div>}
                            {date != null && <div className='small'>{date.data.time_12}</div>}
                        </div>

                        {/* third circle displaying Humidity , Wind , Pressure*/}
                        <div className='c2'>
                            <div className='small'> Humidity.... : {props.res.main.humidity} %</div>
                            <div className='small'> Wind : {props.res.wind.speed} km/h </div>
                            <div className='small'> Pressure : {props.res.main.pressure} mbar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
