import { NextPageContext } from 'next/dist/shared/lib/utils';
import React, { useState, useEffect } from 'react'

type TimaoProps = {
  autor: string,
  frase: string,
}

const getFrase = async (url: string) => {
  const getUrl = url;
  const result = await fetch(getUrl);
  const data = await result.json();
  return data;
}

export default function Timao(props: TimaoProps) {
  
  // Estados
  const [frase, setFrase] = useState<string | undefined>(props.frase);
  const [autor, setAutor] = useState<string | undefined>(props.autor);

  // função pra testar segundo useEffect
  async function getFrase(){
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const position =Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;

    return {
        frase, autor
    }
  }



  // usando o useEffect
  /* uma forma de fazer
  useEffect( () => {
    async function atualizaFrase() {
      const data = await getFrase('https://type.fit/api/quotes');
      const position = Math.floor(Math.random() * data.length)
      const frase = data[position].text;
      const autor = data[position].author;
      setFrase(frase);
      setAutor(autor);
    }
    // atualizaFrase();
  }, [frase, autor]);
*/

// outra forma de fazer
  let contador = 0;
  useEffect(()=>{

    getFrase().then((data)=>{ console.log(`Executou ${contador} vez`, data);});
    contador++;      
  
  },[contador]);


  return (
    <>
        <h1>{frase ? frase : "Seja muito bem vindo"}</h1>
        {autor && (<h2>{autor}</h2>)}

        <button onClick={(_evento) => setAutor("José Fagundes")}>Mudar Autor</button>
    </>
    )
}

Timao.getInitialProps = async (ctx: NextPageContext) => {
  const data = await getFrase('https://type.fit/api/quotes');
  const position = Math.floor(Math.random() * data.length)
  const frase = data[position].text;
  const autor = data[position].author;
  return {
    frase,
    autor,
  }
};
