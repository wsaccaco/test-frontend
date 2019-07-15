import React from 'react';
import S from './divider.module.css';


export default function Divider({children}){
  return (
    <div className={S.divider}>
      <span>{children}</span>
    </div>
  )
}