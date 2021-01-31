import styled from "styled-components";
import {white, blue, black, yellow, sosBlue} from '../global';

export const Banner = styled.div`
        height: 520px;
        background: ${sosBlue};
        display: flex;
        align-items: center;
`;

export const Title = styled.h1`
        margin-bottom: 40px;
        color: ${white};
        font-weight: bold;
        font-size: 64px;
        line-height: 120%;

        @media (max-width: 767px) {
                font-size: 40px;
        }
`;