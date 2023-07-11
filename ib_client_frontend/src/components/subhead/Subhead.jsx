import React from 'react';
import './subheadcss.css';

function Subhead({ pageName }) {

  return (

    <div className='subheadDiv'>
        <h1 className='subhead'>{pageName}</h1>
    </div>
  );
}

export default Subhead;

