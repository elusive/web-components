// components/WebTvButton/WebTvButton.tsx
import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import { mixins } from "../../css/mixins"; 
import theme from "../../theme/starz/theme";
import { UnstyledButton } from "./ButtonBase";

export type WebTvButtonProps = {
    text?: string;
    fixedWidth?: boolean;
    icon?: React.ReactNode;
    disabled?: boolean;
    variant?: "tiny" | "regular" | "static";
    hideWhen?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${mixins.sizeTo720({
        paddingLeft: '40px',
        paddingRight: '40px'
    })}
`;

const contentSpan = styled.span`

`;


const WebtvButtonMedium = styled(UnstyledButton)<WebTvButtonProps>`
    color: ${theme.labelTextColor};
    background: ${theme.buttonBackground}; 
    border: ${theme.buttonBorder}; 
    font-family: ${theme.primaryFont}; 
    font-weight: ${theme.buttonFontWeight}; 

    opacity: ${(props) => (props.hideWhen? 0 : 1)};    
    padding: ${(props) =>
        props.variant === "tiny"
            ? "7px 25px 8px"
            : props.variant === "regular"
              ? "9px 30px 11px"
              : "14px 30px 16px"};

    ${mixins.sizeTo720({
        height: '76px',
        fontSize: '28px'
    })}
`;

const WebTvButton: React.FC<WebTvButtonProps> = ({
    text,
    fixedWidth,
    icon,
    disabled,
    variant,
    onClick,
}) => {
    return (
        <wrapper>
            <contentSpan>
                <WebtvButtonMedium
                    onClick={onClick}
                    disabled={disabled}
                    static={variant === "static"}
                    variant={variant}
                >
                {icon}
                {text}
            </contentSpan>
        </wrapper>
   );
};

export default WebTvButton;