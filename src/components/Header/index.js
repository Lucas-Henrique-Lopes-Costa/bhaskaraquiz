import React from 'react';
import Head from 'next/head';

export default function Header() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
        {/*  Primary Meta Tags */}
        <title>The Legend of Bhaskara</title>
        <meta name="title" content="The Legend of Bhaskara" />
        <meta name="description" content="Projeto de Quiz construído a partir da comunidade Alura." />

        <link rel="icon" href="https://www.flaticon.com/svg/vstatic/svg/690/690326.svg?token=exp=1611675808~hmac=59ea373073f1b2410feb703edffba658" />
        {/*  Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhaskaraquiz.lucas-henrique-lopes-costa.vercel.app/" />
        <meta property="og:title" content="The Legend of Bhaskara" />
        <meta property="og:description" content="Projeto de Quiz construído a partir da comunidade Alura." />
        <meta property="og:image" content="" />

        {/* // Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bhaskaraquiz.lucas-henrique-lopes-costa.vercel.app/" />
        <meta property="twitter:title" content="The Legend of Bhaskara" />
        <meta property="twitter:description" content="Projeto de Quiz construído a partir da comunidade Alura." />
        <meta property="twitter:image" content="" />
      </Head>
    </div>
  );
}
