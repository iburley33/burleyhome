import React from 'react';
import "./headercss.css"
import { useNavigate } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  const navigate = useNavigate();

  function handleNav() {
    navigate('/')
  }
  return (
    <header>
      <div class='headTop'>
        SHOP TANYA'S CURATED LOOKS FOR THE SEASON
      </div>
      <div className='headMain'>
        <h3 onClick={handleNav} class='brand'>
          BURLEY HOME
        </h3>
        <ul>
          <li className='nav-link'>
            <a
              href="/design"
              onClick={() => handlePageChange('Design')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Design' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </a>
          </li>
          <li className='nav-link'>
            <a
              href="/gallery"
              onClick={() => handlePageChange('Gallery')}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Gallery' ? 'nav-link active' : 'nav-link'}
            >
              The Gallery
            </a>
          </li>
          <li className='nav-link'>
            <a
              href="/store"
              onClick={() => handlePageChange('Shop')}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Shop' ? 'nav-link active' : 'nav-link'}
            >
              Shop
            </a>
          </li>
          <li className='nav-link'>
            <a
              href="/profile"
              onClick={() => handlePageChange('Profile')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
