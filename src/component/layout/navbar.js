import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
var FontAwesome = require('react-fontawesome')

const   MyNavbar = ({icon,title}) => {
    return ( 
        <Navbar bg="primary" variant="dark">
            <FontAwesome   name={icon} />
            <Navbar.Brand >{title}</Navbar.Brand>
            <Nav>
        <Link to="/">Home</Link>
         <Link to="/about">About</Link> 
           
            </Nav>
        </Navbar>
     
    )
}

 MyNavbar.defaultProps={
    title:"Github project",
    icon:"github"
    
}
MyNavbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired,
}


export default MyNavbar;