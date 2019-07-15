import React from 'react';
import S from './header.module.css'
import {NavLink} from 'react-router-dom'


function Header({title = ''}) {
  return (
    <div className={S.header}>
      <div className={S.title}>
        {title}
      </div>
      <div className={S.title}>
        <NavLink to='/request' activeClassName={S.active} className={S.link}>Request</NavLink>
        <NavLink to='/manage' activeClassName={S.active} className={S.link}>Manage</NavLink>
      </div>
    </div>
  );
}

export default Header;
