import React from 'react';

const NasaResults = (props) => {
    const {results} = props
    console.log(results);


    return(
        <div>
            {props.results.map(result => {
                return(
                    <img alt='image' src={`https://api.nasa.gov/planetary/earth/imagery${result.multimedia.url}`}/>
                )
            })}
        </div>
    )
}
