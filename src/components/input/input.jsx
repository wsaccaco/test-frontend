import React from 'react'
import S from './input.module.css'

function Input({className='', ...props}){
  return <input className={`${S.input} ${className}`} {...props}/>
}

Input.TextArea = ({className='',  ...props}) => {
  return <textarea className={`${S.textarea} ${className}`} {...props} />
}

export default Input;