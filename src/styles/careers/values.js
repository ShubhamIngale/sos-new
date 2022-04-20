import styled from "styled-components";

export const VDiv = styled.div`
        padding-top: 100px;
        padding-bottom: 100px;

        @media (max-width: 767px) {
                background-size: 90%;
                padding-top: 40px;
                padding-bottom: 40px;
        }
`

export const Title = styled.h2`
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;
        margin-bottom: 40px;

        @media (max-width: 767px) {
                font-size: 32px;
        }
`