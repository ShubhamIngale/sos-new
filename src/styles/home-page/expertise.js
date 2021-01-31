import styled from "styled-components";
import {black, grey, lightBlue} from '../global';

export const ExpertiseDiv = styled.div`
        padding-top: 120px;
        padding-bottom: 120px;
        background-color: ${lightBlue};

        @media (max-width: 768px) {
                padding-top: 50px;
                padding-bottom: 50px;

        }
`;

export const Title = styled.h2`
        margin-bottom: 40px;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;

        @media (max-width: 768px) {
                font-size: 32px;
        }
`;

export const gridItem = {
        padding: '50px',
        display: 'flex',
        alignItems: 'center',
        // boxShadow: '0px 8px 16px rgba(30, 52, 92, 0.1)'
}

export const GridItemImg = styled.img`
        margin-right: 22px
`;

export const GridItemTitle = styled.p`
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 20px;
        line-height: 140%;
        color: ${black}
`;

export const GridItemPara = styled.p`
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.04em;
        color: #6C6C6C;

`;