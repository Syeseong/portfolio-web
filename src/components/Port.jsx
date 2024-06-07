import React, { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MyContext } from '../context/MyContex';

gsap.registerPlugin(ScrollTrigger); //GSAP ScrollTrigger 플러그인 등록

const Port = () => {
    const portRef = useRef(null); //특정 DOM 요소를 참조하기 위해 사용

    useEffect(() => {
        const panels = gsap.utils.toArray(".port__item"); //해당 클래스가 적용된 모든 요소를 배열로 가져옴
        const container = portRef.current; //위에서 정의한 portRef가 참조하는 현재 DOM요소를 가져옴

        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1), //X축 이동하는 비율 현재설정 -100%
            ease: "none", //애니메이션 속도 설정
            scrollTrigger: {
                trigger: container, //애니메이션이 시작될 DOM 요소 지정
                pin: true, //스크롤 동안 요소 고정
                scrub: 1, // 스크롤과 애니메이션의 싱크를 맞춤
                pinSpacing: true,
                end: () => `+=${container.offsetWidth * (panels.length - 1)}` //애니메이션이 끝나는 시점을 설정,
            }
        });
    }, []);

    return (
        <div id="port" ref={portRef}>
            <div className="port__inner">
                <div className="port__wrap">
                    <div className="port__item p1">
                        <ul>
                            <li>my front</li>
                            <li>portfolio</li>
                        </ul>
                    </div>
                    <div className="port__item p2">
                        <div className="title">01</div>
                        <div className="img"></div>
                        <div className="info">
                            <div className="desc">
                                React를 활용해 쇼핑몰 웹 사이트를 개발하였습니다. 사이트는 ...사이트를 벤치마킹 하였으며, ...기능, ...기능, ...기능 과 ...라이브러리를 사용하여 개발하였습니다.
                            </div>
                            <div className="viewBox">
                                <div className="viewSite">
                                    <a href="#">SITE VIEW</a>
                                </div>
                                <div className="viewCode">
                                    <a href="#">CODE VIEW</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="port__item p3">
                        <div className="title">02</div>
                        <div className="img"></div>
                        <div className="info">
                            <div className="desc">
                                React를 활용해 쇼핑몰 웹 사이트를 개발하였습니다. 사이트는 ...사이트를 벤치마킹 하였으며, ...기능, ...기능, ...기능 과 ...라이브러리를 사용하여 개발하였습니다.
                            </div>
                            <div className="viewBox">
                                <div className="viewSite">
                                    <a href="#">SITE VIEW</a>
                                </div>
                                <div className="viewCode">
                                    <a href="#">CODE VIEW</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="port__item p4">
                        <div className="title">03</div>
                        <div className="img"></div>
                        <div className="info">
                            <div className="desc">
                                React를 활용해 쇼핑몰 웹 사이트를 개발하였습니다. 사이트는 ...사이트를 벤치마킹 하였으며, ...기능, ...기능, ...기능 과 ...라이브러리를 사용하여 개발하였습니다.
                            </div>
                            <div className="viewBox">
                                <div className="viewSite">
                                    <a href="#">SITE VIEW</a>
                                </div>
                                <div className="viewCode">
                                    <a href="#">CODE VIEW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="port__item p5">
                        <div className="title">04</div>
                        <div className="img"></div>
                        <div className="info">
                            <div className="desc">
                                React를 활용해 쇼핑몰 웹 사이트를 개발하였습니다. 사이트는 ...사이트를 벤치마킹 하였으며, ...기능, ...기능, ...기능 과 ...라이브러리를 사용하여 개발하였습니다.
                            </div>
                            <div className="viewBox">
                                <div className="viewSite">
                                    <a href="#">SITE VIEW</a>
                                </div>
                                <div className="viewCode">
                                    <a href="#">CODE VIEW</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Port;
