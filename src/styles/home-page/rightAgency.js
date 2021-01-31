import styled from "styled-components";
import ReachingStart from '../../assets/home-page/The-Right-Recruitment-Agency.svg'


export const RADiv = styled.div`
        padding-top: 86px;
        padding-bottom: 135px;
        // background: url(${ReachingStart}) no-repeat;
        // background-position: right -100px bottom;

        @media (max-width: 768px) {
                padding-top: 40px;
                padding-bottom: 40px;
                height: 100vh;
                // background-position: bottom center
        }
`;

export const Title = styled.h2`
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;
        margin-bottom: 13px;
        padding-right: 60;

        @media (max-width: 768px) {
                font-size: 32px;
        }
`

export const Para = styled.p`
        margin-bottom: 32px;
        padding-right: 160px;

        @media (max-width: 768px) {
                padding-right: 0;
        }
`;