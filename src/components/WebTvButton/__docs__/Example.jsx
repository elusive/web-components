import React from "react";
import PropTypes from "prop-types";
import WebTvButton from "../WebTvButton";

const Example = ({ text, ...rest }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                margin: "40px 5px",
            }}
        >
            <WebTvButton
                {...rest}
                className={text.length === 0 && "only-icon"}
                onClick={() => console.log("clicked")}
            >
                {text}
            </WebTvButton>
        </div>
    );
};

Example.propTypes = {
    text: PropTypes.string,
    rest: PropTypes.object,
};

export default Example;
