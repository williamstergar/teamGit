import React from 'react';
import {
    Card, CardImg, CardTitle, CardSubtitle
} from 'reactstrap';
import UserLocation from '../../../geolocation/GeoLocation';

const ChildComponent = (props)  => {

    console.log(props)
    return (
        <div>
           {
           Object.keys(props.main).length === 0 && props.weather.length === 0 ? (
                   <div>Loading...</div>
               ) : (
                   <div>
                      <Card body inverse style={{background:'linear-gradient(350deg, rgb(250, 139, 8) 17%, rgb(160, 20, 118) 68%)', borderColor:'linear-gradient(350deg, rgb(250, 139, 8) 17%, rgb(160, 20, 118) 68%)'}}>
                          <CardTitle>
                              <h1>{props.city}</h1>
                          </CardTitle>
                          <CardSubtitle>
                          <h3>{Math.round(props.main.temp)} &deg;</h3>
                          </CardSubtitle>
                          <div style={{textAlign: 'center'}}>
                              <CardImg src={`http://openweathermap.org/img/wn/${props.weather[0].icon}.png`} alt='weather icon' style={{height: '50px', width: '50px'}}/>
                          </div>
                          <UserLocation/>
                          <p style={{fontSize: '12px', marginTop: '3em'}}>Last update at {props.time}</p>
                      </Card>
                   </div>
               )
           }
        </div>
    )
}
export default ChildComponent; 