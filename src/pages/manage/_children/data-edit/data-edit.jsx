import React, {useState} from 'react';
import Item from '../../../../components/alternable/alternable';
import Input from '../../../../components/input/input';
import ButtonFloat from '../button-float/button-float';
import Footer from '../footer/footer';

const Textarea = Input.TextArea;

function DataEdit({location}) {
  const {field, description, type, sensitivity, values} = location.state;
  const [sending, setSending] = useState(false);
  const [inputs, setInputs] = useState({field, description, type, sensitivity});

  function onsubmit(e){
    e.preventDefault();
    setSending(true)
    setTimeout(() => {
      alert(JSON.stringify(inputs));
      setSending(false)
    }, 1500)
  }

  const handleControl = (event) => {
    const {target} = event;
    const {name, value} = target;
    setInputs({...inputs, [name] : value})
  };

  return (
    <>
      <form onSubmit={onsubmit}>
        <ButtonFloat type='submit' disabled={sending}>Save</ButtonFloat>
        <Item title={'key name'}>
          <Input type='text' onChange={handleControl} name='field' defaultValue={field} />
        </Item>
        <Item title={'Description'}>
          <Textarea type='text' onChange={handleControl} name='description' defaultValue={description} />
        </Item>
        <Item title={'Type'}>
          <select placeholder={'select a value'} onChange={handleControl} name='type' defaultValue={type}>
            <option value='intenger'>Integer</option>
            <option value='string'>String</option>
            <option value='Email'>Email</option>
          </select>
        </Item>
      </form>
      <Footer values={values}/>
    </>
  );
}

export default DataEdit