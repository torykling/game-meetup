import React from 'react';
import { conditionalExpression } from '@babel/types';

const Footer= (props) => {
    let classList = 'nav'
    return(
        <div className="footer">
            Data for Games API gathered from{" "}
            <a
            className="link"
            href="https://www.boardgameatlas.com/api/docs"
            target="_blank"
            rel="noopener noreferrer"
            >
                <b>Board Game Atlas</b>
            </a>
        </div>
    )
}

export default Footer;