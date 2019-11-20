import React from 'react';
import { conditionalExpression } from '@babel/types';
import { Route, Link } from "react-router-dom";

const Nav= (props) => {
    let classList = 'nav'
    return(
        <div className={classList}>
            <h1 className="header">bgm.</h1>
            <Link className="home" to="/">
                Meetups
            </Link>
        </div>
    )
}

export default Nav;