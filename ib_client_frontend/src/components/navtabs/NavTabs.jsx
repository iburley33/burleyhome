import React from 'react';
import "./navtabscss.css"

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <div class='headTop'>
        SHOP TANYA'S CURATED LOOKS FOR THE SEASON
      </div>
      <div className='headMain'>
        <h3 class='brand'>
          BURLEY   HOME
        </h3>
        <ul>
          <li className='nav-link'>
            <a
              href="#lifestyle"
              onClick={() => handlePageChange('Lifestyle')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Lifestyle' ? 'nav-link active' : 'nav-link'}
            >
              Lifestyle
            </a>
          </li>
          <li className='nav-link'>
            <a
              href="#design"
              onClick={() => handlePageChange('Design')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Design' ? 'nav-link active' : 'nav-link'}
            >
              Design
            </a>
          </li>
          <li className='nav-link'>
            <a
              href="#studio"
              onClick={() => handlePageChange('Studio')}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Studio' ? 'nav-link active' : 'nav-link'}
            >
              The Studio
            </a>
          </li>
          <li className='nav-link'>
            <a
              href="#shop"
              onClick={() => handlePageChange('Shop')}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Shop' ? 'nav-link active' : 'nav-link'}
            >
              Shop
            </a>
          </li>
          <li className='nav-link'>
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavTabs;
