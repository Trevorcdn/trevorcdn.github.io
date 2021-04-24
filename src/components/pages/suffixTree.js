import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SuffixTree extends Component {
    render() {
        return (
            <suffixTree>
                <div className="container-fluid">
                    <h2> <strong>Source Code </strong> </h2>
                    <p><a href="https://github.com/Trevorcdn/Suffix-Tree-Array-and-String-Linearization-" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">View Github Repository</a></p>

                    <h2><strong>Suffix Tree</strong></h2>
                    <p>Using Agile software development methodology, our team of 5 implemented Suffix Array and Circular String Linearization</p>


                    <h3><strong>Background Informations</strong></h3>
                    <p><a href="/pdfs/suffixTreeInfo.pdf" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">  View More Background Info </a></p>
                    For more info should I link Dan Gusfield's paper???

                    <h2><strong>Technology Used</strong></h2>
                    <h3> Language </h3>
                    <img src={'images/projectPages/cplusplus.png'} style={{ width: 200, height: 200 }} />
                    <div className="text"><strong>C++</strong></div>
                    <br /> <br />

                    <h3><strong> Tools </strong></h3>
                    <div className="picTool">
                        <div className="picAlign">
                            <img src={'images/projectPages/c9ide.png'} style={{ width: 175, height: 180 }} />
                            <p><strong>Cloud9 IDE</strong></p>
                        </div>
                        <div className="picAlign">
                            <img src={'images/projectPages/google.png'} className="image" style={{ width: 180, height: 150 }} />
                            <p><strong>Google C++ <br /> Testing Framework </strong></p>
                        </div>
                        <div className="picAlign" style={{ paddingTop: 15 }}>
                            <img src={'images/projectPages/github.png'} className="image" style={{ width: 150, height: 150 }} />
                            <p style={{ paddingTop: 16 }}><strong>Github</strong></p>
                        </div>
                    </div>

                </div>

            </suffixTree>

        );
    }
}

export default SuffixTree;