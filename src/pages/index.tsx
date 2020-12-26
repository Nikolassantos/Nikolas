import React from 'react'
import Head from 'next/head'
import { AppWrapper } from '../styles/pages/Home'
import Header from '../components/Header'
import { Content } from '../components/Content'
import { AboutMe } from '../components/About'
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <AppWrapper>
        <Header />
        <Content />
        <AboutMe />
      </AppWrapper>
    </>
  )
}

export default Home
