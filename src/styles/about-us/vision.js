import styled from "styled-components";
import {white, sosBlue} from '../global';
import yellowBg from '../../assets/global/yellow-hex.svg'

export const VDiv =styled.div`
        padding-top: 64px;
        padding-bottom: 90px;
        background-color: ${sosBlue};
        background-repeat: no-repeat;
        background-size: auto;
        background-position: bottom 10vh left -10vw;
        text-align: center;

        @media (max-width: 767px) {
                padding-top: 40px;
                padding-bottom: 40px;
                background-size: contain;
                background-position: top -220px left -100px;
        }
`;

export const Para = styled.p`
        margin-top: 32px;
        margin-bottom: 12px;
        color: ${white};
        padding-right: 80px;

        @media (max-width: 767px) {
                padding-right: 0;
        }
`;

export const Title = styled.h2`
        font-weight: bold;
        font-size: 64px;
        line-height: 120%;
        padding-right: 60px;
        color: ${white};

        @media (max-width: 767px) {
                font-size: 32px;
                margin-bottom: 100px;
        }
`;