import {
    Card, CardImg, CardTitle, CardSubtitle
} from 'reactstrap';

const ChildComponent = (props) => {
    console.log(props);
    return (
        <div>
            {
                Object.keys(props.main).length === 0 && props.weather.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                            <CardTitle>
                                <h1>{props.city}</h1>
                            </CardTitle>
                            <CardSubtitle>
                                <h3>{Math.round(props.main.temp)}°</h3>
                            </CardSubtitle>
                            <div style={{textAlign: 'center'}}>
                                <CardImg src={`http://developer.ticketmaster.com/img/w/${props.event[0].icon}.png`} alt='event icon' style={{height: '50px', width: '50px'}}/>
                            </div>
                            <p style={{fontSize: '12px', marginTop: '3em'}}>Last update at {props.time}</p>
                        </Card>
                    </div>
                )
            }
        </div>
    )
}

export default ChildComponent;