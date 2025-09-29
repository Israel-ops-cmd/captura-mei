import styled from "styled-components"
import { pxToRem } from "../../utils/Utils"

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${pxToRem(10)} ${pxToRem(40)};

    @media (max-width: 768px) {
        flex-direction: column;
        gap: ${pxToRem(5)}; /* gap menor entre logo e nav */
        padding: ${pxToRem(10)} ${pxToRem(20)};
    }
`

export const Text = styled.span`
    font-size: ${pxToRem(20)};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.button};
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${pxToRem(60)};

    @media (max-width: 768px) {
        gap: ${pxToRem(10)}; /* gap menor entre os links no celular */
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const NavLink = styled.a`
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        font-size: ${pxToRem(16)};
    }
`
