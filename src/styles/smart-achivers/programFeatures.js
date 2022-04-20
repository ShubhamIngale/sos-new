import styled from "styled-components";
import {white, black} from '../global';

export const PFDiv = styled.div`
        padding-top: 80px;
        padding-bottom: 48px;
        background: ${white};

        @media (max-width: 767px) {
                padding-top: 40px;
                padding-bottom: 40px;
        }
`

export const Title = styled.h2`
        margin-bottom: 56px;
        font-weight: bold;
        font-size: 48px;
        line-height: 130%;
        letter-spacing: 0.04em;
        color: ${black};

        @media (max-width: 767px) {
                font-size: 32px;
                margin-bottom: 32px
        }
`