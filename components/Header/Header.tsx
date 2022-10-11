import React, { useState } from 'react';
import styles from  '../../styles/Header.module.css';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Head } from 'next/document';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';

const HeaderPage = styled.header`
  background: rgb(96, 214, 99);
  width: 100%;
  display: flex;
  align-itens: center;
  justify-content: space-between;
  padding: 10px;
`

type HeaderProps = {
  menu?: Array<string>,
  pesquisar?: string,
  name?: string,
}

export default function Header(props: HeaderProps) {
  
  // usando Get e Set com useState
  const [useAuth, setUserAuth] = useState<boolean>(true);
  const [nameUser, setNameUser] = useState<string | undefined>(props.name);
  
  return (
    // <header className={styles.menusite}>
    <HeaderPage>
        <div>
            Logotipo
        </div>
        <nav>
            <ul className={ css`
            width: 90%;
            display: inline-flex;
            margin: 0;
            padding: 0;
            & > li {
              min-width: 120px;
              text-align: center;
              list-style: none;
            }` }>
              <li>Home</li>
              <li>Produtos</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
        </nav>
        {
          useAuth && (<div>
            <span>Seja Bem Vindo <strong>{nameUser ? nameUser : "Visitante"}</strong></span>
          </div>)
        }
        <form>
            <Input placeholder='pesquisar'></Input>
            <Button>{props.pesquisar ? props.pesquisar : "Search"}</Button>
        </form>
    </HeaderPage>
    // </header>
  )
}
