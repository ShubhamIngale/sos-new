import styled from "styled-components";
import {white, sosBlue, black} from './global';


export const HeaderDiv = styled.div`
        position: fixed;
        width: 100%;
        padding-top: 12px;
        padding-bottom: 6px;
        background-color: transparent;
        z-index: 1000;
        transition: all .2s ease-in-out;

        @media (max-width: 768px) {
                background-color: ${white}
        }
`;
export const HeaderDivWhite = styled.div`
        position: fixed;
        width: 100%;
        padding-top: 12px;
        padding-bottom: 6px;
        background-color: ${white};
        z-index: 1000;
        transition: all .2s ease-in-out;

        @media (max-width: 768px) {
                background-color: ${white}
        }
`;

export const LinkUl = styled.ul`
        display: flex;
        justify-content: flex-end;
        align-items: center;
`;

export const LinkUlList = styled.li`
        margin-left: 32px;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: ${white}
`;

export const LinkButton = {
        marginTop: 0,
        color: `${white}`,
        backgroundColor: `${sosBlue}`,
        fontWeight: 600,
        padding: '8px 28px'
}

export const MobileDiv = styled.div`
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: ${white};
        position: absolute;
        height: 100vh;
        top: 0;
        right: 0;
        width: 0%;
        transition: all .2s ease-in-out;
        overflow: hidden;
        z-index: 1001;
`;

export const MobileList = styled.li`
        text-align: left;
        margin: 24px 10px;
        font-size: 24px;
`;