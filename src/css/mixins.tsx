import { css } from "styled-components";
import { Styles } from "styled-components/dist/types";

// mixin for sizing to 720px
export const mixins = {
    sizeTo720: (props: Styles<object>) => css`
        ${props};
        @media only screen and (max-width: 1280px) {
            ${props};
        }
    `,
};
