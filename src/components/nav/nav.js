import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Generate from './../../routes/generate/generate';
import Saved from './../../routes/saved/saved';

import './nav.scss';
import Constants from './../../static/constants';

const Nav = props => (
    <div className="navLinks">
        <nav>
            <ul>
                <li className="generate">
                    <Link to="/generate">
                        {Constants.generate}
                    </Link>
                </li>
                <li className="saved">
                    <Link to="/saved">
                        {Constants.saved}
                    </Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route exact path='/generate' component={Generate} />
            <Route path='/saved' component={Saved} />
        </Switch>
    </div>
)

export default Nav;