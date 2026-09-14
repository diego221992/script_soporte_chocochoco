import React from 'react';
const Error404 = ({translate, lang}) => {
  return (
    <div className="error-404">
      <h1>{translate(lang, 'Error 404')}</h1>
      <p>{translate(lang, 'La página que buscas no existe.')}</p>
    </div>
  );
};

export default Error404;