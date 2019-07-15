import React from 'react';
import S from './list.module.css'

const List = ({children, className, ...props}) => {
  return (
    <div {...props} className={`${S.list} ${className}`}>
      {children.map((item, index) => <div key={index} className={S.item}>{item}</div>)}
    </div>
  );
};

export default List;