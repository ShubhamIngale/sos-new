import styled from "styled-components";
import {white, yellow} from '../global';

export const BSDiv = styled.div`
        padding-top: 117px;
        padding-bottom: 96px;
        background: ${white};

        @media (max-width: 768px) {
                padding-top: 40px;
                padding-bottom: 40px;
        }
`;

export const gridPaper = {
        padding: '190px 22px 40px 22px',
        minHeight: '379px',
        color: yellow
}

export const gridPaperMobile = {
        padding: '40px 22px',
        minHeight: '379px',
        color: yellow,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
}

export const MainTitle = styled.h2`
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;
         margin-bottom: 13px;

         @media (max-width: 768px) {
                 font-size: 32px;
         }
`;

export const Title = styled.h2`
        margin-bottom: 13px;
        font-weight: bold;
        font-size: 28px;
        line-height: 120%;
        color: ${white}
`;

export const Desc = styled.p`
         margin-top: 10px;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.04em;
        color: ${white};
`;