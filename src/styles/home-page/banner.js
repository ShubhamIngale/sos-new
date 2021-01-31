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
`;

export const BgOverlay = styled.div`
        position: absolute;
        top: 124px;
        left:-84px;
        height: 100%;
        width: 50%;
        background: url(${yellowOverlay});
        background-size: cover;
        background-repear: no-repeat;
        z-index: 0;
`;

export const BgOverlayMobile = styled.div`
        position: absolute;
        top: -160px;
        left:0px;
        height: 100%;
        width: 105vw;
        background: url(${yellowOverlay});
        background-size: cover;
        background-repear: no-repeat;
        z-index: 0;
        transform: scaleX(-1);
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
        position: relative;
        font-weight: bold;
        font-size: 40px;
        line-height: 120%;
        z-index: 1
`;