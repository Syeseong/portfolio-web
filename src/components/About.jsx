import React, { useEffect, useRef } from 'react'

const About = () => {
    const letterRef = useRef([]);
    const addToRefs = ((el) => {
        if (el && !letterRef.current.includes(el)) {
            letterRef.current.push(el);
        }
    })

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in-visible")
                } else {
                    entry.target.classList.remove("fade-in-visible")
                }
            });
        }, { threshold: 0.4 });
        letterRef.current.forEach((ref) => {
            observer.observe(ref);
        })

        return () => {
            letterRef.current.forEach((ref) => {
                observer.unobserve(ref);
            })
        }
    }, [])
    return (
        <section id="about">
            <div className="about__inner">
                <div className="about__text">
                    <ul>
                        <li ref={addToRefs} className="fade-in">seo ye seong</li>
                        <li ref={addToRefs} className="fade-in">introduce</li>
                    </ul>
                </div>
                <div className="about__desc1">
                    <ul>
                        <li ref={addToRefs} className="fade-in">
                            <h2>
                                "저를 간단하게 표현하자면 카멜레온 같아요."
                            </h2>
                        </li>
                        <li ref={addToRefs} className="fade-in">
                            어떠한 환경이 주어지더라도 <br />
                            어느새 그 환경에 맞게 잘 어우러져 생활하는 모습은<br />
                            마치 카멜레온과 같아요. <br />
                        </li>
                    </ul>
                </div>
                <div className="about__desc2">
                    <ul>

                        <li ref={addToRefs} className="fade-in">
                            <h2>
                                "배움을 통해 무언가를 얻을 수 있다는건 즐겁고 행복한 일이라고 생각해요."
                            </h2>
                        </li>
                        <li ref={addToRefs} className="fade-in">
                            배움에는 끝이 없다고 생각합니다. <br />
                            당장 지금에 만족해하지 않고 끊임없이 배울 자세가 되어 <br />
                            항상 성장하고 발전하는 개발자가 되겠습니다. <br />
                        </li>
                    </ul>

                </div>
                <div ref={addToRefs} className="about__img fade-in"></div>
            </div>
        </section>
    )
}

export default About
