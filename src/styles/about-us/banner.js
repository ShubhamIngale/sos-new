import styled from "styled-components";
import banner from '../../assets/about-us/About-First-Fold.jpg'
import {white} from '../global'

export const BannerDiv = styled.div`
        height: 80vh;
        display: flex;
        align-items: center;
        background: url(${banner}) no-repeat;
        background-size: cover;
        background-position: center right;
`;

export const Title = styled.h1`
        font-weight: bold;
        font-size: 64px;
        line-height: 120%;
        color: ${white};

        @media (max-width: 768px) {
                position: absolute;
                top: 100px;
                font-size: 40px;
                z-index: 1;
        }
`;