import React from 'react';
import "./footercss.css"

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
    return (
        <footer>
            <div>
            <p>Burley Home</p>
            </div>
        </footer>
    );
}

export default Footer;
