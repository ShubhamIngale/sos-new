import styled from "styled-components";
import {white, yellow, grey, black, blue} from '../global';

export const JIDiv = styled.div`
        padding-top: 120px;
        padding-bottom: 50px;
        background-color: ${grey};

`

export const paper = {
        position: 'relative',
        marginBottom: 24,
        padding: '24px 17px',
        backgroundColor: `${white}`
}

export const SubTitle = styled.h5`
        margin: 12px 0;
        font-size: 16px;
        line-height: 120%;
        max-width: 70%
`

export const InfoList = styled.ul`
        display: flex;
`

export const InfoListItem = styled.li`
        display: flex;
        align-items: center;
        margin-right: 16px;
`

export const ButtonDiv = styled.div`
        position: absolute;
        top: 24px;
        right: 17px;
`

export const Hr = styled.hr`
        margin: 16px 0;
        border: none;
        border-top: 1px solid ${grey};
`

export const InfoListItemTwo = styled.li`
        margin-right: 10px;
        padding-right: 10px;
        border-right: 2px solid ${grey};

        :nth-of-type(3) {
                border-right: none;
        }
`

export const DescriptionList = styled.ul`
        margin: 20px 0;
        margin-bottom: 0;
`

export const DescriptionListItem = styled.li`
        margin: 12px 0;
        margin-bottom: 0
`