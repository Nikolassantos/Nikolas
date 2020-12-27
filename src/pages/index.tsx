import React from 'react'
import Head from 'next/head'
import { AppWrapper } from '../styles/pages/Home'
import Header from '../modules/Header'
import { Content } from '../modules/Content'
import { AboutMe } from '../modules/About'
import { Projects } from '../modules/Projects'
import { Contact } from '../modules/Contact'
import { Knowledge } from '../modules/Knowledge'

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
        <Knowledge />
        <Contact />
      </AppWrapper>
    </>
  )
}

export default Home
