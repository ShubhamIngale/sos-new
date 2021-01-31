import styled from "styled-components";
import {lightBlue} from '../global';

export const JobsDiv = styled.div`
        padding-top: 60px;
        padding-bottom: 60px;
        min-height: 75vh;
        background-color: ${lightBlue}
`

export const LoadingDiv = styled.div`
        min-height: 75vh;
        display: flex;
        justify-content: center;
        align-items: center;
`

export const gridItem = {
        padding: `24px 17px 10px 17px`
}

export const GridItemTitle = styled.h2`
        font-size: 24px;
        font-weight: bold;
        line-height: 120%;
        margin-bottom: 8px;
`

export const GridItemList = styled.ul`
        margin-top: 8px;
        margin-bottom: 8px;
        display: flex;
        flex-wrap: wrap;
`

export const GridItemListItem = styled.li`
        display: flex;
        align-items: center;
        margin-right: 16px;
`

export const Description = styled.p`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 70vw;
`

export const BottomDiv = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
`