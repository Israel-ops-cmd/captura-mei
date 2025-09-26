import styled from "styled-components"
import { pxToRem } from "../../utils/Utils"

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${pxToRem(10)} ${pxToRem(40)}
`

export const Text = styled.text`
    font-size: ${pxToRem(20)};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.button}
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${pxToRem(60)};
`

export const NavLink = styled.a`
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`