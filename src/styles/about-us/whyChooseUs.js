import styled from "styled-components";
import {white} from '../global';

export const WCUDiv = styled.div`
        padding-top: 110px;
        padding-bottom: 140px;
        background: ${white};

        @media (max-width: 767px) {
                padding-top: 40px;
                padding-bottom: 40px;
        }
`;

export const Title = styled.h2`
        margin-bottom: 64px;
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;
        text-align: center;

        @media (max-width: 767px) {
                font-size: 32px;
        }
`;