import React from "react"
import { Card, Card_Body, Card_Header_1, Card_Header_2, Card_Header_3, Card_Header_4, Cards, CardText, CardTitle, Container, Text } from "./style"
import { Button, StyledH1 } from "../../types/GlobalStyle"
import { FaExclamationTriangle, FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

export const Hero: React.FC = () => {
    return (
        <Container>
            <StyledH1>Descubra a situação do seu MEI e o que fazer</StyledH1>
            <Text>Veja qual se aplica à sua situação e veja como regularizar</Text>
            <Cards>
                <Card>
                    <Card_Header_1>
                        <FaExclamationTriangle color="yellow" size={32} />
                    </Card_Header_1>
                    <Card_Body>
                        <CardTitle>Aberto, mas sem utilizar o CNPJ</CardTitle>
                        <CardText>Você abriu um MEI e parou de usar, mas os impostos continuaram sendo cobrados e é preciso regularizar</CardText>
                        <Button>Saiba mais</Button>
                    </Card_Body>
                </Card>
                <Card>
                    <Card_Header_2>
                        <FaExclamationCircle color="white" size={32} />
                    </Card_Header_2>
                    <Card_Body>
                        <CardTitle>Fechado, mas sem entregar as declarações e os DAS</CardTitle>
                        <CardText>Seu MEI foi encerrado, mas com as obrigações das declarações e pagamentos dos impostos pendentes</CardText>
                        <Button>Saiba mais</Button>
                    </Card_Body>
                </Card>
                <Card>
                    <Card_Header_3>
                        <FaCheckCircle color="green" size={32} />
                    </Card_Header_3>
                    <Card_Body>
                        <CardTitle>Aberto ou fechado, mas com obrigações em dia</CardTitle>
                        <CardText>Seu Mei está aberto ou fechado, mas os impostos foram pagos mensalmente e as declarações entregues</CardText>
                        <Button>Saiba mais</Button>
                    </Card_Body>
                </Card>
                <Card>
                    <Card_Header_4>
                        <FaExclamationTriangle color="white" size={32} />
                    </Card_Header_4>
                    <Card_Body>
                        <CardTitle>Com débitos, mas em parcelamento</CardTitle>
                        <CardText>Você não pagou os impostos mensais, mas entrou em um acordo e fez o parcelamento e agora está em dia</CardText>
                        <Button>Saiba mais</Button>
                    </Card_Body>
                </Card>
            </Cards>
            <Button>Regularizar agora</Button>
        </Container>
    )
}