import styled from "styled-components";
import {white, black, sosBlue, lightBlue, orange} from '../global';


export const PDiv = styled.div`
        padding-top: 65px;
        padding-bottom: 70px;
        background: ${lightBlue};

        @media (max-width: 767px) {
                padding-top: 40px;
                padding-bottom: 40px;
        }
`

export const Title = styled.h2`
        margin-bottom: 108px;
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

export const TableHeadDiv = styled.div`
        padding: 72px 50px 32px;
        background: ${sosBlue};
        color: ${white};
        text-align: center;
        border: 1px solid #E2E4E8;
        border-right: none;
        position: relative;
        min-height: 160px;

        @media (max-width: 767px) {
                border-right: 1px solid #E2E4E8;
        }
`

export const TableHeadCircle = styled.div`
        padding: 0 50px;
        position: absolute;
        height: 120px;
        width: 120px;
        background: ${orange};
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -60px;
        left: 50%;
        transform: translateX(-50%)
`

export const TableMainDiv = styled.div`
        border: 1px solid #E2E4E8;
        border-right: none;
        border-top: none;
        padding: 16px 27px 30px;
        min-height: 381px;

        p {
                line-height: 1.2
        }

        ul {
                margin-top: 16px;
                list-style: disc;
                margin-left: 16px;

                li {
                        margin-bottom: 16px;
                }
        }

        @media (max-width: 767px) {
                border-right: 1px solid #E2E4E8;
        }
        
`