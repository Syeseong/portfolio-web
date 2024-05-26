import React from 'react'
import Skip from '../components/Skip'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Stack from '../components/Stack'
import Port from '../components/Port'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Sns from '../components/Sns'
import Main from '../components/Main'
import MobileNav from '../components/MobileNav'

const Home = () => {
    return (
        <>
            <Skip />
            <Header />
            <MobileNav />
            {/* <Sns /> */}
            <Main>
                <Intro />
                <Stack />
                <Port />
                <Contact />
            </Main>
            {/* <Footer /> */}
        </>
    )
}

export default Home
