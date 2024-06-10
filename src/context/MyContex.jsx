import React, { createContext, useRef, useState, useEffect } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    // 모바일 상태 nav 조작 State, 함수
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(!show)
    }

    // letter observer
    const letterRef = useRef([]);
    const addToRefs = ((el) => {
        if (el && !letterRef.current.includes(el)) {
            letterRef.current.push(el);
        }
    })
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in-visible")
                    observer.unobserve(entry.target);
                }
            })
        }, { threshold: 0.6 });
        const currentRefs = letterRef.current;
        currentRefs.forEach((ref) => {
            observer.observe(ref);
        })

        return () => {
            currentRefs.forEach((ref) => {
                observer.unobserve(ref);
            })
        }
    }, [])

    // header color change


    return (
        <MyContext.Provider value={{ show, setShow, toggleMenu, addToRefs }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyProvider };