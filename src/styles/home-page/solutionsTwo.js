import styled from "styled-components";
import {white, black, sosBlue} from '../global';


export const BSDiv = styled.div`
        padding-top: 80px;
        padding-bottom: 80px;
        background: ${sosBlue};
        color: ${white};

        @media (max-width: 768px) {
                padding-top: 40px;
                padding-bottom: 40px;
        }
`;

export const Title = styled.h2`
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;
        margin-bottom: 13px;

        @media (max-width: 768px) {
                font-size: 32px;
        }
`;

export const Para = styled.p`
        margin-bottom: 12px;
        padding-right: 150px;
        font-weight: normal;

        @media (max-width: 768px) {
                padding-right: 15px;
        }
`;

export const CardTitle = styled.h4`
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 24px;
        line-height: 130%;
        letter-spacing: 0.04em;
`;

export const CardPara = styled.p`
        color: #6C6C6C;
        font-weight: normal;
        line-height: 1.2;
        padding-right: 45px;
`;