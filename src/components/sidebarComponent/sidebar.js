import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



class Sidebar extends Component {
    render() {
        return (
            <div className="sidebars">
            <SideNav style={{ 'background-color': 'royalblue' }}
            /* onSelect={(selected) => {
                 // Add your code here
             }}*/
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        {/*NavIcon == Icon for the sidebars, where fa fa-fw fa-home is a preset code for a house icon*/}
                        <NavIcon >
                            <Link to="/">
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </Link>
                        </NavIcon>
                        <NavText><Link to="/"> Home </Link></NavText>
                    </NavItem>

                    <NavItem eventKey="Projects">
                        <NavIcon>
                                {/*if user clicks on laptop icon then it redirects them to hostURL.com/Projects*/}
                                <Link to="/Projects">
                                    <i className="fa fa-fw fa-laptop" style={{ fontSize: '1.75em' }} />
                                </Link>
                        </NavIcon>
                        {/*if user clicks on laptop icon then it redirects them to hostURL.com/Projects via <Link to="/blah">*/}
                        <NavText><Link to="/Projects"> Projects </Link></NavText>
                            <NavItem eventKey="Projects/SalesAutomation">
                                <NavText><Link to="/SalesAutomation" style={{ color: "black" }}>  Salesforce Automation </Link></NavText>
                        </NavItem>
                        <NavItem eventKey="Projects/SuffixTree">
                                <NavText><Link to="/SuffixTree" style={{ color: "black" }}>  Suffix Tree  </Link></NavText>
                        </NavItem>
                        
                        <NavItem eventKey="Projects/Semaphores">
                            <NavText><Link to="/Semaphores" style={{ color: "black" }}> Semaphores  </Link></NavText>
                        </NavItem>
                        <NavItem eventKey="Projects/website">
                                <NavText><Link to="/Website" style={{ color: "black" }}> This Portfolio</Link></NavText>
                        </NavItem>
                    </NavItem>
                    
                    <NavItem eventKey="Resume">
                        <NavIcon>
                                <Link to="/Resume">
                                    <i className="fa fa-fw fa-file" style={{ fontSize: '1.75em' }} />
                                </Link>
                        </NavIcon>
                        <NavText><Link to="/Resume"> Resume </Link></NavText>
                    </NavItem>

                    <NavItem eventKey="Work">
                        <NavIcon>
                                <Link to="/Work">
                                    <i className="fa fa-fw fa-briefcase" style={{ fontSize: '1.75em' }} />
                                </Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/Work">Work Experience</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Contact">
                        <NavIcon>
                                <Link to="/Contact">
                                    <i className="fa fa-fw fa-envelope" style={{ fontSize: '1.75em' }} />
                                </Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/Contact">Contact</Link>
                        </NavText>
                    </NavItem>
                    
                        <NavItem eventKey="Github" className="GitButton" style={{ position: 'absolute', bottom: 0}}>
                        <NavIcon>
                            <a href="https://github.com/Trevorcdn" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-fw fa-github" style={{ fontSize: '1.75em' }} />
                            </a>
                        </NavIcon>
                        <NavText>
                            <a href="https://github.com/Trevorcdn" target="_blank" rel="noopener noreferrer">
                                    Github
                            </a>
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
            </div>
        );
    }
}

export default Sidebar;