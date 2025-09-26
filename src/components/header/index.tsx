import React from "react"
import { Container, Text, Nav, NavLink } from "./style"

export const Header: React.FC = () => {
    return (
        <Container>
            <Text>Portal MEI</Text>
            <Nav>
                <NavLink>Perguntas frequentes</NavLink>
                <NavLink>Contato</NavLink>
            </Nav>
        </Container>
    )
}