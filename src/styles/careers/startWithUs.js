import styled from "styled-components";
import {white} from '../global';

export const SWUDiv = styled.div`
        padding-top: 64px;
        // padding-bottom: 144px;
        background-color: ${white};

        @media (max-width: 767px) {
                padding-top: 40px;
                // padding-bottom: 350px;
                background-size: 90%;

        }
`;

export const MainPara = styled.p`
        font-size: 18px;
        font-weight: bold;
        padding-right: 40px;

        @media (max-width: 767px) {
                padding-right: 0;
        }
`;

export const Title = styled.h2`
        margin-top: 40px;
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;
        padding-right: 100px;

        @media (max-width: 767px) {
                margin-top: 50px;
                font-size: 32px;
        }
`;

export const Para = styled.p`
        margin-bottom: 10px;
        // padding-right: 100px;
`;