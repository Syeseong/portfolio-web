import React from 'react'
import Skip from '../components/Skip'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Stack from '../components/Stack'
import Port from '../components/Port'
import Contact from '../components/Contact'
import Main from '../components/Main'
import MobileNav from '../components/MobileNav'
import About from '../components/About'

const Home = () => {
    return (
        <>
            <Skip />
            <Header />
            <MobileNav />
            <Main>
                <Intro />
                <About />
                <Stack />
                <Port />
                <Contact />
            </Main>
        </>
    )
}

export default Home
