import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './LoginModel';
import Search from './SearchPage';
import SearchIcon from './constants/search.png'

const logoUrl = "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"

function MainNav() {
    return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
            <img
              alt=""
              src={logoUrl}
            //   width="30"
              height="60"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <a href='./search' style={{marginRight:'30px'}}> <img height={30} width={30} src={SearchIcon}/> </a>
            <Navbar.Text>
                <Login></Login>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;