import React, { useContext } from 'react'
import navItem from "../data/navItems.json";
import { MyContext } from '../context/MyContex';
const MobileNav = () => {
    const { show } = useContext(MyContext);
    return (
        <div id="mobilenav" className={`${show ? "show" : ""}`}>
            <div className="mobilenav__inner">
                <ul>
                    {navItem.map((item, idx) => (
                        <li key={idx}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MobileNav
