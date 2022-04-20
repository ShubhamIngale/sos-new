import styled from "styled-components";
import {white, black} from '../global';


export const INDiv = styled.div`
        padding-top: 70px;
        padding-bottom: 75px;
        background: ${white};
        text-align: center;

        @media (max-width: 767px) {
                padding-top: 40px;
                padding-bottom: 40px;
        }
`

export const Title = styled.h2`
        margin-bottom: 50px;
        font-weight: bold;
        font-size: 48px;
        line-height: 110%;
        letter-spacing: 0.04em;
        color: ${black};

        @media (max-width: 767px) {
                font-size: 32px;
                margin-bottom: 40px
        }
`