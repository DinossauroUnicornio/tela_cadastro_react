import React from 'react';
import styles from  '../../styles/Header.module.css';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Head } from 'next/document';

const HeaderPage = styled.header`
  background: rgb(96, 214, 99);
  width: 100%;
  display: flex;
  align-itens: center;
  justify-content: space-between;
  padding: 10px;
`

const InputSearch = styled.input`
  width: 190px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.8);
  line-height: 20px;
  padding-left: 10px;
`

const ButtonSearch = styled.button`
  width: 100px;
  border-radius: 5px;
  border: none;
  color: red;
  background: transparent;
  :hover {
    color: green;
  }
`

type HeaderProps = {
  menu?: Array<string>,
  pesquisar?: string,
}

export default function Header(props: HeaderProps) {
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
        <form>
            <InputSearch placeholder='pesquisar'></InputSearch>
            <ButtonSearch>{props.pesquisar ? props.pesquisar : "Search"}</ButtonSearch>
        </form>
    </HeaderPage>
    // </header>
  )
}
