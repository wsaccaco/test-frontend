import S from './button-float.module.css';
import Button from '../../../../components/button/button';
import React from 'react';

export default function ButtonFloat({children, ...props}){
  return (
    <div className={S.wrapButton}>
      <Button {...props}>{children}</Button>
    </div>
  )
}