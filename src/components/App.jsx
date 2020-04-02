import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from './Layout';
// import { Home } from './pages/Home';
import { Tickets } from './pages/Tickets';
import { Ticket } from './pages/Ticket';

export const App = (props) => {

    return <Layout>
        {props.children}
    </Layout>

}