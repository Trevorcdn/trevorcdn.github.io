import React, { Component } from 'react';

class Semaphores extends Component {
    render() {
        return (
            <semaphores>
                <div className="container-fluid">
                    <h2> Source Code </h2>
                    <p><a href="https://github.com/Trevorcdn/Semaphore" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">View Github Repository</a></p>

                    <h2>Semaphore project here</h2>
                    <p>Using Agile software development methodology, our team of 2 implemented semaphores and used it for a Thread Private Storage</p>

                    <h2>Technology Used</h2>
                    <h3> Language </h3>
                    <img src={'images/projectPages/c.png'} style={{ width: 200, height: 200 }} />
                    <div className="text"><strong>C</strong></div>
                    <br /> <br />

                    <h3> Tools </h3>
                    <div class="picTool">
                        <div className="picAlign" style={{ paddingTop: 16 }}>
                            <img src={'images/projectPages/Ubuntu.png'} style={{ width: 125, height: 125}} />
                            <p style={{ paddingTop: 12}}><strong>Ubuntu Linux</strong></p>
                        </div>
                        <div className="picAlign">
                            <img src={'images/projectPages/github.png'} className="image" style={{ width: 150, height: 150 }} />
                            <p ><strong>Github</strong></p>
                        </div>
                    </div>
                </div>
            </semaphores>

        );
    }
}

export default Semaphores;