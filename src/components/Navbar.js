import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './LoginModel';

const logoUrl = "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"

function BasicExample() {

    return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
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
          <Navbar.Text>
            <Login></Login>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;