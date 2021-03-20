import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Sidebar from './components/sidebarComponent/sidebar';
import Homepage from './components/pages/homePage';
import Projects from './components/pages/projects';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import SuffixTree from './components/pages/suffixTree';
import SalesAutomation from './components/pages/salesAutomation';
import Semaphores from './components/pages/semaphores';
import Website from './components/pages/website';
import Work from './components/pages/work';

//includes
import './style.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/Projects' component={Projects} />
                    <Route exact path='/Resume' component={Resume} />
                    <Route exact path='/Work' component={Work} />
                    <Route exact path='/Contact' component={Contact} />
                    <Route exact path='/SalesAutomation' component={SalesAutomation} />
                    <Route exact path='/Semaphores' component={Semaphores} />
                    <Route exact path='/SuffixTree' component={SuffixTree} />
                    <Route exact path='/Website' component={Website} />
                    <Sidebar />
                </div>
                
            </Router>
        );
    }
}

export default App;
