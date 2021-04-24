import React, { Component } from 'react';

class Header extends Component{
    render(){
        return (
            <header style={{ backgroundImage: 'url(images/banner.jpg)', backgroundPosition: 'bottom left' }}>
                <h1 style={{color:"white"}}>Trevor Nguyen</h1>
                
               
            </header>
            
        );
    }
}

export default Header;