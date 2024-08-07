import React from "react";
import PropTypes from "prop-types";

const FocusGroup = ({ children }) => {
    return <div className="focus-group">{children}</div>;
};

FocusGroup.propTypes = {
    children: PropTypes.node,
};

export default FocusGroup;
