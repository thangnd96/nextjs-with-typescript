import React from 'react';

// CSS
import '@Styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
