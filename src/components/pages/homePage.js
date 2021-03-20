import React, { Component } from 'react';
import Resume from './resume';

class Homepage extends Component {
    render() {
        return (
            <div className="container-fluid">

                <h1>About Me</h1>
                <p> some paragraph about me here</p>

                {/*Expertise Section */}
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <span className="heading-meta">What Can I do?</span>
                            <h2 className="colorlib-heading">Here are some of my expertise</h2>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Object Oriented Programming </h3>
                                        <p>I have experience building projects and programs using C and C++</p>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Data Structures & Algorithms</h3>
                                        <p>Coming from a Computer Science background,<br /> I have good grasp over fundamental concepts of DSA</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Automation Engineer</h3>
                                        <p>Created an program using Java, Selenium Webdriver, and TestNG to both test the website and automate tasks on a Salesforce inspired website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Resume />
            </div>
        );
    }
}

export default Homepage;