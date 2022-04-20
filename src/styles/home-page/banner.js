import styled from "styled-components";
import {white} from '../global';
import background from '../../assets/home-page/First-Fold.jpg'
import yellowOverlay from '../../assets/global/yellow-hex.svg';

export const BYDTDiv = styled.div`
        position: relative;
        background-image: url(${background});
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        height: 680px;

        @media(max-width: 768px) {
                background-position: right -300px center;
        }
`;

export const BgOverlay = styled.div`
        position: absolute;
        background: linear-gradient(180deg, rgba(0,0,0,0.8281687675070029) 11%, rgba(0,212,255,0) 100%);
        height: 100%;
        width: 100%;
`;

export const Title = styled.h2`
        position: relative;
        margin-top: 200px;
        margin-bottom: 40px;
        color: ${white};
        font-weight: bold;
        font-size: 64px;
        line-height: 120%;
        z-index: 1
`;

export const TitleMobile = styled.h2`
        margin-top: 108px;
        margin-bottom: 20px;
        color: ${white};
        position: relative;
        font-weight: bold;
        font-size: 40px;
        line-height: 120%;
        z-index: 1
`;