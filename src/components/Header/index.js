import React from 'react';
import Head from 'next/head';

export default function Header() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="The Legend of Bhaskara" key="title" />
        {/*  Primary Meta Tags */}
        <title>The Legend of Bhaskara</title>
        <meta name="title" content="The Legend of Bhaskara" />
        <meta name="description" content="Projeto de Quiz construído a partir da comunidade Alura." />

        <link rel="icon" href="https://github.com/Lucas-Henrique-Lopes-Costa/bhaskaraquiz/blob/main/src/img/formula.png" />
        {/*  Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhaskaraquiz.lucas-henrique-lopes-costa.vercel.app/" />
        <meta property="og:title" content="The Legend of Bhaskara" />
        <meta property="og:description" content="Projeto de Quiz construído a partir da comunidade Alura." />
        <meta property="og:image" content="https://github.com/Lucas-Henrique-Lopes-Costa/bhaskaraquiz/blob/1d15e786df3cc813ead9aa7d08ebe2e0ce13138e/src/image/background.jpg?raw=true" />

        {/* // Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bhaskaraquiz.lucas-henrique-lopes-costa.vercel.app/" />
        <meta property="twitter:title" content="The Legend of Bhaskara" />
        <meta property="twitter:description" content="Projeto de Quiz construído a partir da comunidade Alura." />
        <meta property="twitter:image" content="https://github.com/Lucas-Henrique-Lopes-Costa/bhaskaraquiz/blob/1d15e786df3cc813ead9aa7d08ebe2e0ce13138e/src/image/background.jpg?raw=true" />
      </Head>
    </div>
  );
}
