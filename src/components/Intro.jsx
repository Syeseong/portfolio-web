import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
const Intro = () => {
    // ------------Intro Main Text ------------------
    const [visibleLetters, setVisibleLetters] = useState([]);
    const text = "S EO YE SEONG  PORTFOLIO"
    const breaKIdx = 14;
    useEffect(() => {

        let idx = 0;
        const interval = setInterval(() => {
            setVisibleLetters((prev) => [...prev, text[idx]]);
            idx++;
            if (idx === text.length) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [text])
    // ----------------------------------------------- 

    // ----------- Intro Sub Text --------------------
    const [scrollTxt, setScrollTxt] = useState(false);
    const [arrowTxt, setArrowTxt] = useState(false);
    useEffect(() => {
        const scrollTimer = setTimeout(() => {
            setScrollTxt(true);
        }, 2500);

        const arrowTimer = setTimeout(() => {
            setArrowTxt(true)
        }, 3500);
        return () => clearTimeout(scrollTimer, arrowTimer)
    }, [scrollTxt, arrowTxt])
    // ------------------------------------------------
    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="intro__text__container">
                    {visibleLetters.map((char, idx) => (
                        idx === breaKIdx
                            ? <React.Fragment key={idx}><br /><span className="end__text">{char}</span></React.Fragment>
                            : <span key={idx} className={idx < breaKIdx ? "start__text" : "end__text"}>{char}</span>
                    ))}
                </div>
                <div className={`intro__scroll__text ${scrollTxt ? "show" : ""}`}>
                    <p>SCROLL TO</p>
                </div>
                <div className={`intro__arrow ${arrowTxt ? "show" : ""}`}>
                    <i className="fas fa-arrow-down"></i>
                </div>
            </div>
        </section>
    )
}

export default Intro
