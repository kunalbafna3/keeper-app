import React from 'react';

function Footer(){

    // getting current date for copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
            copyright {currentYear}
            </p>
        </footer>
    )
}

export default Footer;