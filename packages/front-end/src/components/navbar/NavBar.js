import React, { Component } from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router";
import { ContractData } from "drizzle-react-components";
import PropTypes from "prop-types";
import NewContractForm from "../utility/NewContractForm";
import { DrizzleContext } from "drizzle-react";
import Balance from "./Balance";
import Login from "./Login";

const NavDiv = styled.div`
  min-width: 100%;
  max-height: 30px;
`;

const NavUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #000000;
  display: flex;
  align-items: center;
`;

const NavLI = styled.li`
  padding: 10px 10px 10px 10px;
`;
const NavSpace = styled.li`
  flex: 1;
`;

const NavLIR = styled.li`
  margin-right: 10px;
`;

const NavLink = styled(Link)`
  color: #ffffff;
`;

class NavBar extends Component {
  render() {
    const accounts = this.props.drizzleState.accounts;
    const hasAccount = accounts.hasOwnProperty(0);
    return (
      <NavDiv>
        <NavUL>
          <NavLI>
            <NavLink to="/">Artonomous</NavLink>{" "}
          </NavLI>
          <NavLI>
            <NavLink to="/generators">Generators</NavLink>{" "}
          </NavLI>
          <NavLI>
            <NavLink to="/history">History</NavLink>{" "}
          </NavLI>
          <NavLI>
            <NavLink to="/soul">Soul</NavLink>{" "}
          </NavLI>
          <NavSpace />
          <NavLIR>{hasAccount && <Balance {...this.props} />}</NavLIR>
          <NavLIR>{!hasAccount && <Login {...this.props} />}</NavLIR>
        </NavUL>
      </NavDiv>
    );
  }
}

export default NavBar;
