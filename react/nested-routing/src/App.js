// Source: https://reactrouter.com/web/guides/quick-start
// Date Accessed: 9/5/2020
// Title: Quick Start, 2nd Example, Nested Routing

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

const Topic = () => {
    const { topicId } = useParams();
    return (
        <h2>
            Requested topic identifier: { topicId }
        </h2>
    );
}

const Topics = () => {
    const match = useRouteMatch();

    return (
        <div>
            <h1>Topics</h1>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Router path={match.path}>
                    <h2>Please select a topic.</h2>
                </Router>
            </Switch>
        </div>
    );
}

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
                            <Link to='/topics'>Topics</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/topics'>
                        <Topics />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}