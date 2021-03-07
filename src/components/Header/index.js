import React from 'react';
import Head from 'next/head';

export default function Header() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="The Legend of Bhaskara" key="title" />
        {/*  Primary Meta Tags */}
        <title>Simulado Eletrostárica</title>
        <meta name="title" content="The Legend of Bhaskara" />
        <meta name="description" content="Projeto de Quiz construído a partir da comunidade Alura." />

        <link rel="icon" href="https://github.com/Lucas-Henrique-Lopes-Costa/bhaskaraquiz/blob/9b49ed1912f12142e0e0c476d41b9f00aa8bd64b/src/img/formula.png?raw=true" />

        {/*  Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhaskaraquiz.lucas-henrique-lopes-costa.vercel.app/" />
        <meta property="og:title" content="The Legend of Bhaskara" />
        <meta property="og:description" content="Projeto de Quiz construído a partir da comunidade Alura." />
        <meta property="og:image" content="https://github.com/Lucas-Henrique-Lopes-Costa/bhaskaraquiz/blob/4b6caa4f7cd261517e59a3889164181aab152181/src/img/background.jpg" />

        {/* // Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bhaskaraquiz.lucas-henrique-lopes-costa.vercel.app/" />
        <meta property="twitter:title" content="The Legend of Bhaskara" />
        <meta property="twitter:description" content="Projeto de Quiz construído a partir da comunidade Alura." />
        <meta property="twitter:image" content="https://github.com/Lucas-Henrique-Lopes-Costa/bhaskaraquiz/blob/4b6caa4f7cd261517e59a3889164181aab152181/src/img/background.jpg" />
      </Head>
    </div>
  );
}
