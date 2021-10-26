import React, {useState} from 'react';
import NasaResults from './NasaResults';


const baseURL = 'https://api.nasa.gov/planetary/earth/imagery'
const key = 'gR2yMRZUYCUHtNojy4DI30WFRlXm85qaxZZhiTqZ';

const Nasa = () => {

    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [status, setStatus] = useState(null);
    
    const handleSubmit = (event) => {
        // fetchResults();
        event.preventDefault();
    }

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
    let url = `${baseURL}?lon=${lon}&lat=${lat}&date${date}&api_key=${key}`;

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button onClick = {getLocation}>Get Location</button>
                <h1>Coordinates</h1>
                <p>{status}</p>
                {lat && <p>Latitude: {lat}</p>}
                {lon && <p>Longitude: {lon}</p>}
                <p>{url}</p>
            </form>
            <form>
                {/* {
                  results =  <NasaResults />
                } */}
            </form>
        </div>
    )
}

export default Nasa;