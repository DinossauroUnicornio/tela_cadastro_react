import { NextPageContext } from 'next/dist/shared/lib/utils';
import React, { useState } from 'react'

type TimaoProps = {
  autor: string,
  frase: string,
}

export default function Timao(props: TimaoProps) {
  
  // Estados
  const [frase, setFrase] = useState<string | undefined>(props.frase);
  const [autor, setAutor] = useState<string | undefined>(props.autor);

  return (
    <>
        <h1>{frase ? frase : "Seja muito bem vindo"}</h1>
        {autor && (<h2>{autor}</h2>)}
    </>
    )
}

Timao.getInitialProps = async (ctx: NextPageContext) => {
  const url = 'https://type.fit/api/quotes';
  const result = await fetch(url);
  const data = await result.json();
  const position = Math.floor(Math.random() * data.length)
  const frase = data[position].text;
  const autor = data[position].author;
  return {
    frase,
    autor,
  }
};
