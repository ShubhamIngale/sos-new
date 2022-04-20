import styled from "styled-components";
import {white, sosBlue, lightBlue} from '../global';
import yellowBg from '../../assets/global/yellow-hex.svg'

export const ContactDiv = styled.div`
        padding-top: 112px;
        padding-bottom: 110px;
        background-color: ${white};

        br {
                display: block
        }

        @media (max-width: 767px) {
                padding-top: 40px;
                background-size: 130%;
                background-position: bottom -100px left;
        }
`

export const Title = styled.h1`
        margin-bottom: 40px;
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;

        @media (max-width: 767px) {
                font-size: 32px;
        }
`

export const ItemDiv = styled.div`
        display: flex;
        align-items: flex-start;
        margin-bottom: 32px;

        img {
                margin-right: 16px;
        }
`

export const ContactForm = styled.form`
        margin-left: auto;
        // margin-top: -50px;
        // height: 380px;
        // max-width: 480px;
        padding: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${lightBlue};

        .MuiOutlinedInput-root {
                background: ${white};
                border: none;
                margin-bottom: 28px;
        }

        @media (max-width: 767px ) {
                // margin-top: 40px;
                padding: 24px;
        }
`