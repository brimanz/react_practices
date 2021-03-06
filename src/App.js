import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from './shared/dishes'

//component imports
import Menu from './components/MenuComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return (
      <div>
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  } 
}

export default App;
