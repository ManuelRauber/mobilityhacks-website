import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

// Assets
require('./../index.html');
require('./../css/normalize.css');
require('./../css/skeleton.css');
require('./../css/main.styl');

// Views (if you have an index.js you can import folders)
import AppLayout from './layout/AppLayout';
import Home from './views/Home/';
import BecomeASponsor from './views/BecomeASponsor/';
import Contact from './views/Contact/';
import GetYourTicket from './views/GetYourTicket/';
import PreviousHackathons from './views/PreviousHackathons/';

ReactDom.render(
    <Router>
        <Route name="root" path="/" component={ AppLayout }>
            <IndexRoute name="home" component={ Home }/>
            <Route name="home" path="home" component={ Home }/>
            <Route name="get-your-ticket" path="get-your-ticket" component={ GetYourTicket }/>
            <Route name="previous-hackathons" path="previous-hackathons" component={ PreviousHackathons }/>
            <Route name="become-a-sponsor" path="become-a-sponsor" component={ BecomeASponsor }/>
            <Route name="contact" path="contact" component={ Contact }/>
        </Route>
    </Router>,
    document.getElementById('app')
);
