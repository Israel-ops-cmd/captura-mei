import React from "react"
import { Container, FooterText, FooterLink } from "./style"

export const Footer: React.FC = () => {
    return (
        <Container id="contato">
            <FooterText>
                Contato: <FooterLink href="mailto:notificacao@portalmei.net.br">notificacao@portalmei.net.br</FooterLink>
            </FooterText>

            <FooterText>
                © {new Date().getFullYear()} Portal MEI. Todos os direitos reservados.
            </FooterText>
        </Container>
    )
}
