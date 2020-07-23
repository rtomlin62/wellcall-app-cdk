import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import About from '../about/About';
import Contact from '../contact/Contact';
import Home from '../home/Home';

export default function Main() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}