import React, {ButtonHTMLAttributes} from 'react';
import styled from '@emotion/styled';

// tipo FC = Function Component
const ButtonSearch: React.FC<ButtonUnior> = styled.button`
  width: 100px;
  border-radius: 5px;
  border: none;
  color: red;
  background: transparent;
  :hover {
    color: green;
  }
`

type ButtonProps = {
    children: React.ReactNode,
}

type ButtonUnior = ButtonProps | ButtonHTMLAttributes<HTMLElement>

export default function Button(props: ButtonHTMLAttributes<ButtonUnior>) {
  return (
    <ButtonSearch {...props}>{props.children}</ButtonSearch>
  )
}
