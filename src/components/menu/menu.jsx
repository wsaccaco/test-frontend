import React from 'react';
import S from './menu.module.css'
import {NavLink} from 'react-router-dom'

function Menu({children}) {
  return (
    <div className={S.menu}>
      {children}
    </div>
  );
}

function Option({children, ...props}) {
  return (
    <NavLink {...props} activeClassName={S.active} className={S.option}>
      <div>{children}</div>
      <div> > </div>
    </NavLink>
  );
}

Menu.Option = Option;

export default Menu;