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
    const [headerColor, setHeaderColor] = useState(false);

    useEffect(() => {
        const p1 = document.querySelector('.p1');
        const p2 = document.querySelector('.p2');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.target === p1 && entry.isIntersecting) {
                        setHeaderColor(false);
                    } else if (entry.target === p2 && entry.isIntersecting) {
                        setHeaderColor(true);
                    }
                });
            },
            {
                root: null,
                threshold: 0.7,
            }
        );

        if (p1) observer.observe(p1);
        if (p2) observer.observe(p2);

        return () => {
            if (p1) observer.unobserve(p1);
            if (p2) observer.unobserve(p2);
        };
    }, [setHeaderColor]);

    return (
        <MyContext.Provider value={{ show, setShow, toggleMenu, addToRefs, headerColor }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyProvider };