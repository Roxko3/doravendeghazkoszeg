import { Container, Nav, Navbar } from "react-bootstrap"
import { FaFacebook } from "react-icons/fa"
import { NavLink } from "react-router"

function Navigacio()
{
    return(
        <>
        <Navbar expand="lg" className="theme-color" sticky="top" >
        <Container>       
            <Navbar.Brand as={NavLink} to="/">Dóra Vendégház Kőszeg</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/szolgaltatasaink">Szolgáltatásaink</Nav.Link>
                <Nav.Link as={NavLink} to="/galeria">Galéria</Nav.Link>
                <Nav.Link as={NavLink} to="/kapcsolat">Kapcsolat</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
                <Nav.Link href="https://www.facebook.com/koszeg.doravendeghaz/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={20}/>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default Navigacio