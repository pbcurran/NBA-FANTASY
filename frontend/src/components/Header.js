import { Container, Navbar } from 'react-bootstrap';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Navbar className={(styles.navbar, styles.navbarCustom)} expand="lg">
        <Container>
          <h5 style={{ color: 'white', userSelect: 'none' }}>
            Quest For The Belt
          </h5>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
