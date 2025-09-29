import styled from "styled-components"
import { pxToRem } from "../../utils/Utils"

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(10)};
    padding: ${pxToRem(40)} ${pxToRem(20)};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
`

export const FooterText = styled.p`
    font-size: ${pxToRem(14)};
    margin: 0;
    color: ${({ theme }) => theme.colors.text}
`

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.text};
    }
`
