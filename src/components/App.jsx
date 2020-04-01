import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Tickets } from './pages/Tickets';
import { Ticket } from './pages/Ticket';

export const App = (props) => {

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