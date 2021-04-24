import React, { Component } from 'react';
import Footer from '../footerComponent/footer';
import { Link } from 'react-router-dom';

class Projects extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>
                    Projects Content
                </h1>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Recent Projects</h2>
						</div>
						

						<div className="row">
							<div className="col-md-4 col-md-push-2 animate-box" data-animate-effect="fadeInRight">
								<Link to="/SalesAutomation"> 
								<div className="project" style={{ backgroundImage: 'url(images/selenium.png)' }}>
									<div className="desc">
										<div className="con">
											<h3>Salesforce Automation Script</h3>
											<span>Automation Script for a Salesforce inspired website. <br/>Main goal of the project was to learn and have hands-on experience using Selenium Webdriver and TestNG</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /> Java </a></span>
												<span><a href="#"><i className="icon-cloud4" /> Intellij </a></span>
												<span><a href="#"><i className="icon-eye" /> Selenium Webdriver </a></span>
												<span><a href="#"><i className="icon-cloud4" /> TestNG </a></span>
												
											</p>
											
										</div>
									</div>
								</div>
								</Link> 
							</div>

							<div className="col-md-4 col-md-push-2 animate-box" data-animate-effect="fadeInLeft">
								<Link to="/SuffixTree">
								<div className="project" style={{ backgroundImage: 'url(images/blog-2.jpg)' }}>
									<div className="desc">
										<div className="con">
												<h3>Suffix Tree</h3>
												<span>INFORMATION ABOUT SUFFIX TREE PROJECT</span>
												<p className="icon">
													<span><a href="#"><i className="icon-share3" /> C++ </a></span>
													<span><a href="#"><i className="icon-cloud4" /> Cloud9 IDE </a></span>
													<span><a href="#"><i className="icon-eye" /> Github </a></span>
													<span><a href="#"><i className="icon-eye" /> Google Test </a></span>
													<span><a href="#"><i className="icon-cloud4" /> Ukkonen </a></span>
												</p>
											
										</div>
									</div>
								</div>
								</Link>
							</div>

						</div>

						<div className="row">
							<div className="col-md-4 col-md-push-2 animate-box" data-animate-effect="fadeInLeft">
								<Link to="/Semaphores">
								<div className="project" style={{ backgroundImage: 'url(images/semaphore.png)' }}>
									<div className="desc">
										<div className="con">
											<h3>Semaphores</h3>
											<span>INFORMATION ABOUT Semaphores PROJECT</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /> C </a></span>
												<span><a href="#"><i className="icon-eye" /> Github </a></span>
												<span><a href="#"><i className="icon-eye" /> Multithreading  </a></span>
												<span><a href="#"><i className="icon-eye" /> Thread Private Storage </a></span>
												<span><a href="#"><i className="icon-eye" /> Ubuntu/Linux </a></span>
											</p> 
										</div>
									</div>
								</div>
								</Link>
							</div>

							<div className="col-md-4 col-md-push-2 animate-box" data-animate-effect="fadeInRight">
								<Link to="/Website">
								<div className="project" style={{ backgroundImage: 'url(images/portfolio2.png)' }}>
									<div className="desc">
										<div className="con">
											<h3>Portfolio Website</h3>
											<span>Created a website in order to have hands-on experience with React and Javascript </span>
											<p className="icon">
												<span><a href="#"><i className="icon-cloud4" /> CSS </a></span>
												<span><a href="#"><i className="icon-cloud4" /> Github </a></span>
												<span><a href="#"><i className="icon-cloud4" /> HTML </a></span>
												<span><a href="#"><i className="icon-eye" /> Javascript </a></span>
												<span><a href="#"><i className="icon-cloud4" /> Microsoft Visual Studio </a></span>
												<span><a href="#"><i className="icon-cloud4" /> Photoshop </a></span>
												<span><a href="#"><i className="icon-share3" /> React </a></span>
												<span><a href="#"><i className="icon-cloud4" /> Windows PowerShell </a></span>
											</p>
										</div>
									</div>
								</div>
								</Link>
							</div>
						</div>
					</div>
				</section>

                <Footer />
            </div>
        );
    }
}

export default Projects;