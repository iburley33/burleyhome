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
            >
              Design
            </a>
          </li>
          <li className='nav-link'>
            <a
              href="/gallery"
            >
              The Gallery
            </a>
          </li>
          <li className='nav-link'>
            <a
              href="/store"
            >
              Shop
            </a>
          </li>
          <li className='nav-link'>
            <a
              href="/profile"
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
