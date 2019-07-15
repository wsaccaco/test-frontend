import React from 'react';
import S from './alternable.module.css'

function ItemList({title, children}){

  return (
    <div className={S.alternable}>
      <div className={S.title}>
        {title}
      </div>
      <span className={S.text}>{children}</span>
    </div>
  )
}

export default ItemList;