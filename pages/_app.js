import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


// define our next.js' master MyApp
function MyApp( { Component, pageProps } ) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;

