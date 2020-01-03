import React from 'react';

import './header.scss';
import Constants from './../../static/constants';

const Header = props => (
    <header>
        <div className="logo">
            <h3>{Constants.headerBarTitle}</h3>
        </div>
    </header>
)

export default Header;