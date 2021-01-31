import styled from "styled-components";
import {white, blue} from './global';

export const FooterDiv = styled.footer`
        padding: 72px 0 68px 0;
        background-color: ${blue};
        color: ${white};

        br {
                display: block;
        }
`;

export const FooterTitle = styled.p`
        margin-bottom: 11px;
        font-weight: bold;
        font-size: 16px;
        line-height: 27px;
`;

export const FooterList = styled.li`
        font-weight: 400;
        font-size: 14px;
        line-height: 32px;
        color: ${white}
`;

export const Para = styled.p`
        @media (max-width: 767px) {
                font-size: 14px;
                text-align: center;
        }
`;

export const ParaRight = styled.p`
        text-align: right;
        @media (max-width: 767px) {
                font-size: 14px;
                text-align: center;
        }
`;