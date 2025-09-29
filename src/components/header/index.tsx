import React from "react"
import { Container, Text, Nav, NavLink } from "./style"

export const Header: React.FC = () => {
    return (
        <Container>
            <Text>Portal MEI</Text>
            <Nav>
                <NavLink href="#faq">Perguntas frequentes</NavLink>
                <NavLink href="#contato">Contato</NavLink>
            </Nav>
        </Container>
    )
}
