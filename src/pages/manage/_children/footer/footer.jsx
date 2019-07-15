import React from 'react';
import List from '../../../../components/list/list';
import S from './footer.module.css'
import Divider from '../../../_children/divider/divider';

export default function Footer({values}){
  return (
    <>
      <Divider>POSSIBLE VALUES</Divider>
      <List className={S.titleList}>
        {['Value', 'Description']}
      </List>
      {values.map(({value, description}) =>
        <List key={value}>
          {[value, description]}
        </List>
      )}
    </>
  )
}