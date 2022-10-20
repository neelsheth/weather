import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import DisplayInfo from './DisplayInfo'

export default function Home() {
    const inputRef = useRef()
    const [data, setData] = useState(null)
    const[error,setError] = useState(false)

    const search = () => {
        const input = inputRef.current.value
        setError(false);            
            axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=892b8276a3e43e22d5d74db7a10d976e&units=metric`)
            .then((json)=>{
                    setData(json);
        })
    }

    useEffect(()=>{
        
        axios(`https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=892b8276a3e43e22d5d74db7a10d976e&units=metric`)
        .then((json)=>{
                setData(json);
    })

    },[])






    return (
        <div className='box'>
            <input ref={inputRef} placeholder="Bengaluru..."></input>
            <button onClick={search}>Search</button>
            {error && <h1>Not a valid search input..</h1>}
            {data !== null && <DisplayInfo res={data.data}></DisplayInfo>}
        </div>
    )
}
