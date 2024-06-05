import React from 'react';

const StackSection = ({ title, items }) => (
    <div className={`stack__box stack__${title.toLowerCase()}`}>
        <h2>{title.toUpperCase()}</h2>
        {items.map((item, index) => (
            <div key={index}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
);

export default StackSection;
