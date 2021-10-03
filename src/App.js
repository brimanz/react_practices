import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

//component imports
import Menu from './components/MenuComponent';

function App() {
  return (
    <div>
      <Navbar dark color="info">
        <div className="container">
          <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
