import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    // 모바일 상태 nav 조작 State, 함수
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(!show)
    }
    
    return (
        <MyContext.Provider value={{ show, setShow, toggleMenu }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyProvider };