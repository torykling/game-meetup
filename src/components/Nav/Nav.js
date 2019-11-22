import React from 'react';
import { Link } from "react-router-dom";

const Nav= (props) => {
    let classList = 'nav'
    return(
        <div className={classList}>
            <Link className="header" to="/">
                bgm.
            </Link>
            <p className="fullName">board game meetups.</p>
        </div>
    )
}

export default Nav;