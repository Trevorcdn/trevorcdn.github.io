import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <h1>Resume</h1>
                <a href="/resume/NguyenTrevor-Resume.pdf" className="btn btn-primary btn-lg" target="_blank">View CV</a>
                <a href="/resume/NguyenTrevor-Resume.pdf" className="btn btn-primary btn-lg" target="_blank" download>Download CV</a>
            </div>
        );
    }
}

export default Resume;