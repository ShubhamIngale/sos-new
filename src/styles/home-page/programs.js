import styled from "styled-components";
import {white, black} from '../global';

export const PDiv = styled.div`
        padding-top: 117px;
        padding-bottom: 117px;
        background: ${white};

        @media (max-width: 768px) {
                padding-top: 40px;
                padding-bottom: 40px;
        }
`

export const Title = styled.h2`
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;
         margin-bottom: 13px;
         color: ${black};

         @media (max-width: 768px) {
                 font-size: 32px;
         }
`;