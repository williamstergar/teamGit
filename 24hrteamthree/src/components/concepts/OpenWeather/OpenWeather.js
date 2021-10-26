import React from 'react';
import ChildComponent from './ChildComponent/ChildComponent';

class OpenWeather extends React.Component {
constructor (props){
    super(props)
    this.state = {
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        city: 'Indianapolis',
        apiKey: "647ef15ba31db896900199b6fb0cb91e",
        main: {},
        weather: [],
        time: null
    }
} 

componentDidMount() {
    this.fetchInterval = setInterval (() => {
        fetch(`${this.state.baseURL}?q=${this.state.city}&units=imperial&appid=${this.state.apiKey}`)
            .then(response => response.json())
            .then(json => this.setState({
                main: json.main,
                weather: json.weather
            }))
            .catch(err => console.log(err))
    }, 15000)
}

componentDidUpdate(prevProps, prevState){
    console.log(prevState.main.temp, this.state.main.temp);

    let localTime = new Date ().toLocaleTimeString();

    if (prevState.main.temp !== this.state.main.temp){
        console.log('state has changed');
        this.setState({
            time: localTime
        })
    }
}

componentWillUnmount() {
    console.log('clearing interval');
    clearInterval(this.fetchInterval);
}

render() {
return(
    <div className='main'>
        <div className='mainDiv' style={{textAlign: 'center'}}>
            <ChildComponent  city={this.state.city} main={this.state.main} weather={this.state.weather} time={this.state.time} />
    </div>
</div>
)
}
}

export default OpenWeather;