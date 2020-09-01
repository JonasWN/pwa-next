import React from 'react'
import Head from 'next/head'
import { Theme } from '../styles/theme'
import { Container } from '../styles/layoutStyle'
import { GlobalStyle } from '../styles/reset'
import { ThemeProvider } from 'styled-components'

const Layout = ({ children, title }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next" />
        <meta name="og:title" content="Next" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <title>{title}</title>
      </Head>
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default Layout
