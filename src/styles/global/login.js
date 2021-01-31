import styled from "styled-components";
import {white, sosBlue, black, yellow, grey} from '../global';

export const LoginDiv = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        background-color: ${white};
        z-index: 1001;
        height: 100%;
        width: 45%;
        padding: 40px;
        transition: all .2s ease-in-out;
`

export const Overlay = styled.div`
        background-color: ${black};
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;

`

export const closeIcon = {
        marginLeft: '100%',
        transform: `translateX(-100%)`,
        cursor: 'pointer'
}

export const LoginTitle = styled.h3`
        font-size: 32px;
        font-weight: bold;
        line-height: 120%;
        margin-bottom: 32px;
`

export const Hr = styled.hr`
        margin: 20px 0;
        border: none;
        border-top: 1px solid ${grey}
`
export const googleBtn = {
        border: `1px solid ${sosBlue}`,
        margin: `0 auto`
}

export const GoogleImg = styled.img`
        width: 20px;
        margin-right: 16px;
`