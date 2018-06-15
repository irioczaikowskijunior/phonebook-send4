import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h4>Ooops, route not found.</h4>;
};

export default {
  component: NotFoundPage
};
