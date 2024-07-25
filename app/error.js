'use client';

import React from 'react';

const ErrorPage = ({ errorCode }) => {
  if (errorCode === 404) {
    return <h1>404 - Page Not Found</h1>;
  }

  if (errorCode === 500) {
    return <h1>500 - Server-side Error</h1>;
  }

  return <h1>Unexpected Error</h1>;
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const errorCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { errorCode };
};

export default ErrorPage;
