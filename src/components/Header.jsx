import React, { useContext, useState } from "react"
import navItem from "../data/navItems.json"
import { MyContext } from "../context/MyContex"
const Header = () => {
    const { show, toggleMenu } = useContext(MyContext);
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <h1>
                        <a href="/"><span>PORTFOLIO</span><em><span>2024</span> 서예성</em></a>
                    </h1>
                </div>
                <nav className={"header__nav"}>
                    <ul>
                        {navItem.map((item, idx) => (
                            <li key={idx}>
                                <a href={item.link}><p>0{+ idx + 1}.</p>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={`header__nav__mobile ${show ? "show" : ""}`}
                    id="headerToggle"
                    aria-expanded={show ? "true" : "false"}
                    role="button"
                    onClick={toggleMenu}>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header
