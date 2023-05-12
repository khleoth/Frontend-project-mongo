import styled from 'styled-components/macro';
/* import homeIMG from '../assets/circle-3041437.jpg' */

export const NavbarHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50px;
    background-color: black;
`

export const NavbarP = styled.p`
    color: #3d70a2;
    font-weight: 700;
    font-size: 21px;
    text-decoration: none;
    :hover {
        color: rgb(85 145 204);
        scale: 1.1;
    }
`

export const HomeDiv = styled.div`
    display: flex;
    height: 95vh;
    width: 100vw;
    justify-content: center;
    background-color: black;
`

export const DescriptionWrapper = styled.div`
    width: 90%;
    max-width: 300px;
    display: flex;
    align-items: center;
`

export const HomeDescription = styled.p`
    color: #3d70a2;
    font-size: 20px;
    
`