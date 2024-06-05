// Stack.js
import React, { useContext } from 'react';
import { MyContext } from '../context/MyContex';
import StackSection from './StackSection';
import { frontEnd, backEnd, libraries, tools } from '../data/stackData';

const Stack = () => {
    const { addToRefs } = useContext(MyContext);

    return (
        <div id="stack">
            <div className="stack__inner">
                <div className="stack__text">
                    <ul>
                        <li ref={addToRefs} className="fade-in">use</li>
                        <li ref={addToRefs} className="fade-in">stack</li>
                    </ul>
                </div>
                <div ref={addToRefs} className="stack__box__inner fade-in">
                    <StackSection title="Front" items={frontEnd} />
                    <StackSection title="Back" items={backEnd} />
                    <StackSection title="Library" items={libraries} />
                    <StackSection title="Tools" items={tools} />
                </div>

            </div>
        </div>
    );
};

export default Stack;
