import React, { Component } from 'react';
//import axios from 'axios';

class Contact extends React.Component {
    render() {
        return (
            <contact>
                <div className="container-fluid">
                    <h2> Get in touch </h2>
                    <p className="p" >I'm currently looking for opportunities in the San Francisco Bay Area, <br/> so please reach out if you are looking for an enthusiastic and creative developer! </p><br></br>

                    <a href="https://github.com/Trevorcdn" target="_blank" rel="noopener noreferrer" >
                        <img src={'/images/github.png'} style={{ textAlign: "center" }} />
                    </a>
                    <a href={`mailto:trevorcdnguyen@gmail.com`} target="_blank" rel="noopener noreferrer" >
                        <img src={'/images/emailTo2.png'} style={{ textAlign: "center" }} />
                    </a>


                </div>
            </contact>

        );
    }
}

export default Contact;
