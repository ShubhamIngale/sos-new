import styled from "styled-components";


export const WAWDiv = styled.div`
        padding-top: 140px;
        padding-bottom: 108px;

        @media (max-width: 767px) {
                padding-top: 40px;
                padding-bottom: 40px;
        }

`;

export const Title = styled.h2`
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;

        @media (max-width: 767px) {
                font-size: 32px;
        }
`;

export const Para = styled.p`
        margin-bottom: 8px;
        padding-right: 48px;

        @media (max-width: 767px) {
                padding-right: 0;
        }
`;

export const LastPara = styled.p`
        margin-bottom: 8px;
        padding-right: 48px;

        @media (max-width: 767px) {
                // margin-top: 34vh;
                padding-right: 0;
        }     
`;