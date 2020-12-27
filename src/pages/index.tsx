import React from 'react'
import Head from 'next/head'
import { AppWrapper } from '../styles/pages/Home'
import Header from '../components/Header'
import { Content } from '../components/Content'
import { AboutMe } from '../components/About'
import { Projects } from '../components/Projects'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Nikolas Santos | Portifólio</title>
      </Head>

      <AppWrapper>
        <Header />
        <Content />
        <AboutMe />
        <Projects />
      </AppWrapper>
    </>
  )
}

export default Home
