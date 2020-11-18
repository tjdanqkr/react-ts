import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';

const HeaderDiv =styled.div`
    height:auto;
`;

const Headers:React.FC =()=>{
    
    const [isOpen,setIsOpen] = useState(false);

    const toggle = ()=>setIsOpen(!isOpen);



    return(
      <HeaderDiv>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/user">user</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/statistics">
                  statistics
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          

        </Navbar>
      </HeaderDiv>
    )
}


export default Headers;