import styled from "styled-components";
import {white, lightBlue} from '../global';

export const ProcessDiv = styled.div`
        padding-top: 90px;
        padding-bottom: 96px;
        background: ${lightBlue};

        @media (max-width: 767px) {
                padding-top: 40px;
                padding-bottom: 40px;
        }
`;

export const Title = styled.h2`
        font-weight: bold;
        font-size: 48px;
        line-height: 110%;
        letter-spacing: 0.04em;
        margin-bottom: 24px;

        @media (max-width: 767px) {
                font-size: 32px;
                padding-right: 0;
                margin-bottom: 10px;
        }
`;