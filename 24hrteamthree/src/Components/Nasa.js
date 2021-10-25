import React from 'react';
import NasaResults from '.NasaResults';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery'
const key = 'GjXltuUG7nlr85qEc6ipFT0n1BZ7RTrzgkfdfvvs';

const Nasa = () => {

    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [date, setDate] = useState('');
    const [results, setResults] = useState([]);


    const fetchResults = () => {
        let url = `${baseURL}?lon${lon}&lat${lat}&date${date}&api_key=${key}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data.response.docs))
        .catch(err => console.log(err));
    };
    const handleSubmit = (event) => {
        fetchResults();
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                
            </form>
                {
                  results =  <NasaResults />
                }

        </div>
    )



}

export default Nasa;