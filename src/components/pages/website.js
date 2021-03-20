import React, { Component } from 'react';

class Website extends Component {
    render() {
        return (
            <website>
                <div className="container-fluid">
                    <h2> Source Code </h2>
                    <p><a href="https://github.com/Trevorcdn/Automation-Testing-for-Salesforce" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">View Github Repository</a></p>

                    <h2>Salesforce Automation Script</h2>
                    <p> some info here about why I pick up this project and techinical aspect of it </p>

                    <h2>Technology Used</h2>
                    <h3> Languages </h3>
                    <div className="picTool">
                        <div className="picAlign">
                            <img src={'images/projectPages/css.png'} style={{ width: 150, height: 180 }} />
                            <p><strong>CSS</strong></p>
                        </div>
                        <div class="picAlign">
                            <img src={'images/projectPages/js.png'} className="image" style={{ width: 150, height: 180 }} />
                            <p><strong>Javascript</strong></p>
                        </div>
                        <div class="picAlign">
                            <img src={'images/projectPages/html.png'} className="image" style={{ width: 150, height: 180 }} />
                            <p><strong> HTML </strong></p>
                        </div>
                    </div>
                    <br /> <br />

                    <h3> Tools </h3>
                    <div class="picTool">
                        <div className="picAlign">
                            <img src={'images/projectPages/github.png'} alt="Snow" style={{ width: 150, height: 150 }} />
                            <p><strong>Github</strong></p>
                        </div>
                        <div className="picAlign" style={{ paddingLeft: 30 }}>
                            <img src={'images/projectPages/c9ide.png'} className="image" style={{ width: 175, height: 180 }} />
                            <p><strong>Cloud9 IDE</strong></p>
                        </div>
                        <div className="picAlign">
                            <img src={'images/projectPages/react.png'} className="image" style={{ width: 200, height: 150 }} />
                            <p><strong> React <br/> (Web Framework) </strong></p>
                        </div>
                    </div>
                    <br/>
                    <div class="picTool">
                        <div class="picAlign" style={{ paddingRight: 60}}>
                            <img src={'images/projectPages/ps.png'} alt="Snow" style={{ width: 150, height: 150 }} />
                            <p><strong>Photoshop</strong></p>
                        </div>
                        <div class="picAlign" style={{ paddingRight: 50 }}>
                            <img src={'images/projectPages/msvs.png'} className="image" style={{ width: 150, height: 150 }} />
                            <p><strong>Microsoft Visual Studio</strong></p>
                        </div>
                        <div class="picAlign" style={{ paddingRight: 25 }}>
                            <img src={'images/projectPages/powershell.png'} className="image" style={{ width: 150, height: 150, paddingRight:10 }} />
                            <p><strong> Windows Powershell </strong></p>
                        </div>
                    </div>
                </div>
            </website>

        );
    }
}

export default Website;