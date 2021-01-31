import styled from "styled-components";
import {white, sosBlue} from '../global';

export const JBDiv = styled.div`
        padding-top: 100px;
        padding-left: 24px;
        padding-bottom: 50px;
        background-color: ${sosBlue};

        @media (max-width: 767px) {
                padding-left: 10px;
        }
`

export const Title = styled.h1`
        color: ${white};
        font-weight: bold;
        font-size: 64px;
        line-height: 120%;

        @media (max-width: 767px) {
                font-size: 40px;
        }
`