import styled from "styled-components";
import {white, blue, black, yellow} from '../global';
import homeBg from '../../assets/home-page/cta.jpg'
import aboutCta from '../../assets/about-us/CTA.jpg'
import yellowOverlay from '../../assets/global/yellow-hex.svg';

export const BYDTDiv = styled.div`
        background: url(${homeBg});
        background-size: cover;
        background-repeat: no-repeat;
        height: 480px;
        overflow: hidden;
`;

export const AboutCtaDiv = styled.div`
        background: url(${aboutCta});
        background-size: cover;
        background-repeat: no-repeat;
        height: 480px;
        overflow: hidden;
`;

export const BgOverlay = styled.div`
        position: absolute;
        top: 84px;
        left:-84px;
        height: 100%;
        width: 50%;
        background: url(${yellowOverlay});
        background-size: cover;
        background-repear: no-repeat;
        z-index: 0;

        @media (max-width: 768px) {
                width: 100%;
                left: -50px;
        }
`;

export const Title = styled.h2`
        position: relative;
        margin-bottom: 40px;
        color: ${white};
        font-weight: bold;
        font-size: 64px;
        line-height: 120%;
        z-index: 1;

        @media (max-width: 768px) {
                margin-top: 160px;
                font-size: 40px;
                padding-right: 50px;
        }
`;