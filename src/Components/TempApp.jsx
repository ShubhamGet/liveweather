import React, { useEffect, useState } from 'react'

const TempApp = () => {
    const [city, setCity] = useState();
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ab39e8bdd240db52865c2ee6d02b7819`
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <>
            <div className='container'>
                <div className='box'>
                    <div className='inputData'>
                        <input type="search" placeholder="Search" value={search} className='inputFeild' onChange={(event) => { setSearch(event.target.value) }} />
                    </div>
                    {!city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div>
                            <div className='info'>
                                <h2 className='location'>
                                    <i className="fa fa-street-view"></i>{search}
                                </h2>
                                <h1 className='temp'>
                                    {city.temp}cel
                                </h1>
                                <h3 className='tempmin_max'>
                                    Min: {city.temp_min}cel | Max: {city.temp_max}cel
                                </h3>
                            </div>

                            <div className='wave1'></div>
                            <div className='wave2'></div>
                            <div className='wave3'></div>
                        </div>
                    )
                    }

                </div>
            </div>
        </>
    )
}

export default TempApp
