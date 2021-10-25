import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import TicketMaster from '../concepts/Ticket/TicketMaster';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/ticket'> TicketMaster </Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/ticket'><TicketMaster /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;