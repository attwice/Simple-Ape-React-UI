import {
  Navbar,
  Nav,
  Container,
  Form
} from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="topbg px-0">
      <div className="logotlt f-50 text-center">
        <p className="text-white mb-0">SOLANA</p>
        <p className="mt-0">ROULETEE</p>
      </div>
      <Navbar collapseOnSelect expand="xl" bg="" variant="dark">
        <Container fluid>
          <div></div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              responsive-navbar-nav
            >
              <div className="navitemtxt mx-3 f-23 py-2">
                <a href="#">HOME</a>
              </div>
              <div className="navitemtxt mx-3 f-23 py-2">
                <a href="#">ABOUT</a>
              </div>
              <div className="navitemtxt mx-3 f-23 py-2">
                <a href="#">NFT'S</a>
              </div>
              <div className="navitemtxt mx-3 f-23 py-2">
                <a href="#">TEAM</a>
              </div>
              <div className="navitemtxt mx-3 f-23 py-2">
                <a href="#">FAQ</a>
              </div>
            </Nav>
            <Form className="d-flex py-auto form-mg">
              <p className="navbtn gradbtn mx-5">TWITTER</p>
              <p className="navbtn gradbtn mx-2">OPENSEA</p>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="row pb-150">
        <div className="col-lg-6 font-ms mt-150">
          <h2 className="f-70 font-weight-bold">SUSPENDISSE</h2>
          <h2 className="f-70 font-weight-bold"><span className="gradtxt">SOLANA</span>ROULETEE</h2>
          <p className="f-23 mt-3">
            weiurghlrenglsiefnlwriuenflshlifug<br />
            aquwegfkhebvfwuefbvkeusfhgbk<br />
            wriegnbleifgnblsdfjng
          </p>
          <div className="gradbtn px-2 py-1 mt-5 text-white">
            <div className="f-20 px-4">PLAY NOW</div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="fadecircle">
            <img className="editimg" src="../images/Edit 1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;