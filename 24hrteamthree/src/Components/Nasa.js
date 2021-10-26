import React, {useState} from 'react';



const baseURL = 'https://api.nasa.gov/planetary/earth/imagery'
const key = '4rV0JCRmN3bXPIqi9xZLU4YWnfFFz9kRwofNZWAL';

const Nasa = () => {

    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [status, setStatus] = useState(null);
    
    const getLocation = () => {
        if(!navigator.geolocation){
            setStatus('Geolocation is not supported by your browser');
        }else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            }, () => {
                setStatus('Unable to retreive your location');
            });
        }
    }

    let date = new Date().toLocaleDateString();
    // let url = `${baseURL}?lon=-86.15&lat=39.76&date${date}&api_key=${key}`;
    let url = `${baseURL}?lon=${lon}&lat=${lat}&date=2021-10-26&api_key=${key}`;
    // let url = `${baseURL}?lon=-86.1579&lat=39.7685&date=2021-10-26&api_key=${key}`;


    const fetchResults = async(event) => {
        try{
            const response = await fetch(url);
            console.log(response);

            if(response.status === 404){
                throw "404 not found";
            }

            const data = await response.json();
            console.log(data);
        }catch(error){
            alert(error);
        }
    }

    const handleSubmit = (event) => {
        fetchResults();
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button onClick = {getLocation}>Get Location Information</button>
                <h1>Coordinates</h1>
                <p>{status}</p>
                {lat && <p>Latitude: {lat}</p>}
                {lon && <p>Longitude: {lon}</p>}
                <p>{url}</p>
                <img></img>
            </form>
            <form> 
                {/* {fetchResults()} */}
            </form>
        </div>
    )
}

export default Nasa;