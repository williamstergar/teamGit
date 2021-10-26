import {
    Navbar, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink
} from 'reactstrap';

const Header = () => {
    return(
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'>Navigate the Fetch </NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href='https://developer.ticketmaster.com/api-explorer/v2/'>
                            TicketMaster API Explorer
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;