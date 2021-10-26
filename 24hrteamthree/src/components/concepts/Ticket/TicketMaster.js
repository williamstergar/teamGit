import React from 'react';

import ChildComponent from './ChildComponent/ChildComponent';

class TicketMaster extends React.Component {
    constructor(props) {
        super(props)
        this.event = {
            baseURL: 'https://app.ticketmaster.com/discovery/v2/events',
            city: 'Indianapolis',
            apiKey: 'vVShrAWzladbcDBUDWQXthFdcQJJiJXQ',
            main: {},
            weather: [],
            time: null
        }
    }

    componentDidMount() {
        this.fetchInterval = setInterval(() => {
            fetch(`${this.event.baseURL}?q=${this.event.city}&units=imperial&appid=${this.event.apiKey}`)
                .then(response => response.json())
                .then(json => this.setEvent({
                    main: json.main,
                    weather: json.weather
                }))
                .catch(err => console.log(err))
        }, 15000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.main.temp, this.event.main.temp);

        let localTime = new Date().toLocaleTimeString();
        
        if (prevState.main.temp !== this.event.main.temp) {
            console.log('event has changed');
            this.setEvent({
                time: localTime
            })
        }
    }

    componentWillUnmount() {
        console.log('clearing interval');
        clearInterval(this.fetchInterval);
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv' style={{textAlign: 'center'}}>
                    <ChildComponent city={this.event.city} main={this.event.main} weather={this.event.weather} time={this.event.time}/>
                </div>
            </div>
        )
    }
}

export default TicketMaster;