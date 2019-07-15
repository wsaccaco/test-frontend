import React from 'react';
import S from './subtitle.module.css'

function Subtitle({children}) {
  return (
    <h1 className={S.subtitle}>
      {children}
    </h1>
  );
}

export default Subtitle;
