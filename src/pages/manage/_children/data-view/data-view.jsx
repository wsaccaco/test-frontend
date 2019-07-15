import Item from '../../../../components/alternable/alternable';
import React from 'react';
import ButtonFloat from '../button-float/button-float';
import Footer from '../footer/footer';

function DataView({data = [], match, location}) {
  const {field, description, type, sensitivity, values} = location.state;
  return (
    <>
      <ButtonFloat type='link' to={{pathname: `/manage/${field}/edit`, state: location.state}}>
        Edit
      </ButtonFloat>
      <h3>{field}</h3>
      <Item title='Description'>
        {description}
      </Item>
      <Item title='Type'>
        {type}
      </Item>
      <Item title='Sensitivity'>
        {sensitivity.summary}
      </Item>

      <Footer values={values}/>
    </>
  );
}

export default DataView