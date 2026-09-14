import React from 'react';
const Error403 = ({translate, lang}) => {
  return (
    <div className="error-403">
      <h1>{translate(lang, 'Error 403')}</h1>
      <p>{translate(lang, 'No tienes permisos para acceder a esta página.')}</p>
    </div>
  );
};

export default Error403;