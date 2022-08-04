import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../app/firebase";
import { signOut } from "firebase/auth";
export const NavbarMenu = () =>{
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const username = user?.displayName
    ? user?.displayName
    : user?.email.split("@")[0];

    const onLogout = async () => {
      try {
        await signOut(auth);
        
        navigate("/login");
      } catch (error) {
        <p>{error.message}</p>;
      }
    };
  
    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="dark text-white p-5" variant="dark">
      <Container>
        <Link to="/">
        <Navbar.Brand >Valorant</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/agent" className="mx-3">
          <Navbar.Text>
            Agent
          </Navbar.Text>
          </Link>
          <Link to="/weapon" className="mx-3">
          <Navbar.Text>
            Weapon
          </Navbar.Text>
          </Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        {user ? (
          <>
          <p style={{paddingTop: 15, marginRight: 15}}>{username}</p>
          <Button variant="dark" onClick={onLogout}>
            Logout
          </Button>
          </>
        ) : (<Link to="/login">
          <Button variant="dark">
            Login
          </Button>
        </Link>)}
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}