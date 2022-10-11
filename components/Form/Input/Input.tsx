import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

const InputSearch = styled.input`
  width: 190px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.8);
  line-height: 20px;
  padding-left: 10px;
`


export default function Input(props: InputHTMLAttributes<HTMLInputElement>) { 
  return (
    <InputSearch {...props}/>
  )
}
