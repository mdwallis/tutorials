// Source: https://reactrouter.com/web/guides/quick-start
// Date Accessed: 9/5/2020
// Title: Quick Start, 1st Example, Basic Routing

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const ContactUs = () => <h1>Contact Us</h1>

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/contactus'>Contact Us</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/about'>
                        <About />å
                    </Route>
                    <Route path='/contactus'>
                        <ContactUs />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};