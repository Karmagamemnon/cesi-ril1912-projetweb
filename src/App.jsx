import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './components/pages/Home';
import { Tickets } from './components/pages/Tickets';
import { Ticket } from './components/pages/Ticket';

export default class App extends Component {
    render = () => {
        return <Layout>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/tickets' component={Tickets} />
                    <Route exact path='/tickets/:ticketId' component={Ticket} />
                </Switch>
            </Router>
        </Layout>
    }
}