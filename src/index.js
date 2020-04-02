import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import { Home } from './components/pages/Home';
import { Tickets } from './components/pages/Tickets';
import { Ticket } from './components/pages/Ticket';

import data from './data/data.json';

import "./index.css";

if (localStorage.getItem("tickets") === null)
    localStorage.setItem("tickets", JSON.stringify(data));

ReactDOM.render(
    <React.StrictMode >
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Tickets} />
                    <Route exact path="/tickets" component={Tickets} />
                    <Route exact path="/tickets/:ticketId" component={Ticket} />
                </Switch>
            </App>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();