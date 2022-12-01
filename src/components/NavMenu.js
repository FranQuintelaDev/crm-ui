import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header className='cols j-c-space-between pd-x'>
         <Link to={"/"} id="homeLink">
         <h2>CRM</h2>
         </Link>
        
        <div className='cols'>
        <Link to={"/opportunities"}  id="opportunitiesLink">
          <button className="bg-opp">
            Opportunities
          </button>
          </Link>
          <Link to={"/opportunities/clients"}  id="clientsLink">
          <button className="bg-client">
            Clients
          </button>
          </Link>
        </div>

        {/* <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">Project1</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar> */}
      </header>
    );
  }
}
