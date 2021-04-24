import React, { Component } from 'react';
import Resume from './resume';

class Homepage extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <br /><br />
                    <span className="heading-meta">About me</span>
                </div>
                <h2 className="colorlib-heading">Hey, I'm Trevor Nguyen</h2>
                <p> I am a recent college graduate from University of California, Davis with a bachelor's in Computer Science and a double major  <br /> in Japanese.
                    I'm and currently looking for opportunities within the San Francisco Bay area but other locations are welcome too!  <br />
                    Feel free to look around and if you like what you see, 
                </p>
                <a className="btn btn-primary btn-lg" target="_blank" href={`mailto:trevorcdnguyen@gmail.com`}>
                    Let's talk
                </a>

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
                                        <p>Experienced in building various projects and programs using C and C++, but also been exposed to other technologic stacks</p>
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