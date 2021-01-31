import styled from "styled-components";
import {grey, lightBlue} from '../global';

export const PDiv = styled.div`
        padding-top: 80px;
        padding-bottom: 112px;
        background-color: ${lightBlue};
        
        @media (max-width: 767px) {
                padding-top: 40px;
                padding-bottom: 40px;
        }
`;

export const Title = styled.h2`
        margin-bottom: 40px;
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;

        @media (max-width: 767px) {
                font-size: 32px;
        }
`

export const paper = {
        padding: `25px 17px`,
        height: '100%',
        border: '1px solid rgba(226, 228, 232, 0.4)'
}