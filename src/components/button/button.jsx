import React from 'react';
import {Link} from 'react-router-dom'
import S from './button.module.css'

function Button({children, type, ...props}){
  switch (type) {
    case "link":
      return <Link className={S.button} {...props}>{children}</Link>;
    default:
      return <input type={type} {...props} className={S.button} value={children}/>
  }
}

export default Button;