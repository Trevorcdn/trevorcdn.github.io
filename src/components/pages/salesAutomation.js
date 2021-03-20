import React, { Component } from 'react';

class SalesAutomation extends Component {
    render() {
        return (
            <salesAutomation>
              <div className="container-fluid">
                <h2> <strong>Source Code </strong></h2>
                    <p><a href="https://github.com/Trevorcdn/Automation-Testing-for-Salesforce" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">View Github Repository</a></p>

                    {/*Info on the projects*/}
                    <h2><strong>Salesforce Automation Script</strong></h2>
                    <div className="bginfo">
                        <p> <span style={{ paddingLeft: 30 }}> A </span> project initiated to receive insights on the process of automation development and how <u>Selenium Webdriver</u> is being used in tandem with <u>Java</u> to test websites.
                        In an attempt to implement and learn common automation methodologies and practices, I have decided to implement dynamic element identification by using xpaths locator and the ExpectedConditions class. I also tried to organize my java files using page-object model by having web pages be represented as classes, and the various elements on the pages are defined as variables to the class. </p>
                    </div>
                    
                    <h3><strong>Automation Script Work Flow</strong></h3>
                    <div className="bgSteps">
                        This script is used on a Salesforce Customer Relationship Management <strong>(CRM)</strong> inspired website.
                        <br /> <span style={{ paddingRight: 550 }}><u>Steps:</u></span>
                        <p>
                            <ul>
                                <li>1) Automatically opens a Firefox broswer and redirect to the CRM login page</li>
                                <li>2) Logs in the user with valid login credential</li>
                                <li>3) From the homepage, clicks "My Account" from the top tabs </li>
                                <li>4) From the My Account page, search and clicks on a given contact name </li>
                                <li>5) From the chosen contact page, clicks "Record A Call" button </li>
                                <li>6) From the Record Type dropdownm, select the "Mass Add Promo Call" option </li>
                                <li>7) Checkmarks Chole and Labrin under the Detail Priority Section</li>
                                <li>8) Checkmarks the Payment Option and change the quantity</li>
                                <li>9) Saves the Report and log the user out</li>
                            </ul>
                        </p>
                    </div>
                    {/*Embed Video*/}
                    <h3> Demo </h3>
                    <div className="video">
                        <div style={{ textAlign: "center" }}>
                            <iframe width="750" height="500" class="video"
                                src="https://www.youtube.com/embed/cR7BVwR4Oyw" frameBorder="0">
                            </iframe>
                        </div>
                    </div>
                    <br /> 
                <h2><strong>Technology Used</strong></h2>
                    <h3> Language </h3>
                    <img src={'images/projectPages/java.png'} style={{width:200,height:200}} />
                    <div className="text"><strong>Java</strong></div>
                    <br /> <br />

                    <h3> <strong>Tools </strong></h3>
                    <div className="picTool">
                        <div className="picAlign">
                            <img src={'images/projectPages/intellij.png'} style={{ width: 175, height: 180 }} />
                            <p><strong>Intellij</strong></p>
                        </div>
                        <div className="picAlign">
                            <img src={'images/projectPages/selenium3.png'} className="image" style={{ width: 200, height: 170 }} />
                            <p><strong>Selenium <br /> Webdriver </strong></p>
                        </div>
                        <div className="picAlign">
                            <img src={'images/projectPages/testng.png'} className="image" style={{ width: 150, height: 180 }} />
                            <p><strong> TestNG</strong></p>
                        </div>
                    </div>
                    

              </div>
            </salesAutomation>

        );
    }
}

export default SalesAutomation;