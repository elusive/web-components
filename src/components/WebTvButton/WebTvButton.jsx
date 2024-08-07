// components/WebTvButton/WebTvButton.tsx
import React from "react";
import "./WebTvButton.scss";
import PropTypes from "prop-types";

const WebTvButton = ({ icon, children, ...others }) => {
    return (
        <button {...others}>
            <div className="wrapper">
                {icon && <span className={`icon ${icon}`} />}
                <span className="content">{children}</span>
            </div>
        </button>
    );
};

WebTvButton.propTypes = {
    icon: PropTypes.node,
    children: PropTypes.node,
    others: PropTypes.object,
};

export default WebTvButton;
