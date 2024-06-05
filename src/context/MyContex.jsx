import React, { createContext, useRef, useState, useEffect } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    // 모바일 상태 nav 조작 State, 함수
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(!show)
    }

    // observer
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
        letterRef.current.forEach((ref) => {
            observer.observe(ref);
        })

        return () => {
            letterRef.current.forEach((ref) => {
                observer.unobserve(ref);
            })
        }
    }, [letterRef.current])
    return (
        <MyContext.Provider value={{ show, setShow, toggleMenu, addToRefs }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyProvider };