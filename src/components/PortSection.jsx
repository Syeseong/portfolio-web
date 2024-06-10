// PortfolioItem.js
import React from 'react';

const PortSection = ({ className, title, description }) => (
    <div className={`port__item ${className}`}>
        <div className="title">{title}</div>
        <div className="img"></div>
        <div className="info">
            <div className="desc">{description}</div>
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
);

export default PortSection;
