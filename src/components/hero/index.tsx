import React, { useState } from "react"
import { 
    Card, Card_Body, Card_Header_1, Card_Header_2, 
    Card_Header_3, Card_Header_4, Cards, CardText, 
    CardTitle, Container, Text 
} from "./style"
import { Button, StyledH1 } from "../../types/GlobalStyle"
import { FaExclamationTriangle, FaExclamationCircle, FaCheckCircle } from "react-icons/fa"
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, CloseButton } from "./modalStyle"

export const Hero: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalText, setModalText] = useState("")

    const openModal = (title: string, text: string) => {
        setModalTitle(title)
        setModalText(text)
        setIsOpen(true)
    }

    const closeModal = () => setIsOpen(false)

    return (
        <Container>
            <StyledH1>Descubra a situação do seu MEI e o que fazer</StyledH1>
            <Text>Veja qual se aplica à sua situação e saiba como regularizar</Text>

            <Cards>
                {/* Card 1 */}
                <Card>
                    <Card_Header_1>
                        <FaExclamationTriangle color="yellow" size={32} />
                    </Card_Header_1>
                    <Card_Body>
                        <CardTitle>Aberto, mas sem utilizar o CNPJ</CardTitle>
                        <CardText>
                            Você abriu um MEI e parou de usar, mas os impostos continuaram sendo cobrados e é preciso regularizar
                        </CardText>
                        <Button onClick={() => openModal(
                            "Aberto, mas sem utilizar o CNPJ",
                            "Se você abriu o seu CNPJ mas parou de usar,\n" +
                            "todos os meses é cobrado o imposto do MEI no seu nome.\n" +
                            "Esse imposto gerou uma dívida com a Receita Federal\n" +
                            "que pode ser transferida para o seu CPF a qualquer momento.\n\n" +
                            "💡 Solução: procurar um contador para regularizar ou encerrar o CNPJ,\n" +
                            "e parcelar os seus débitos com a Receita."
                        )}>
                            Saiba mais
                        </Button>
                    </Card_Body>
                </Card>

                {/* Card 2 */}
                <Card>
                    <Card_Header_2>
                        <FaExclamationCircle color="white" size={32} />
                    </Card_Header_2>
                    <Card_Body>
                        <CardTitle>Fechado, mas sem entregar as declarações e os DAS</CardTitle>
                        <CardText>
                            Seu MEI foi encerrado, mas com as obrigações das declarações e pagamentos dos impostos pendentes
                        </CardText>
                        <Button onClick={() => openModal(
                            "Fechado, mas sem entregar as declarações e os DAS",
                            "Se você fechou o CNPJ, mas não entregou as declarações\n" +
                            "e não pagou os impostos mensais,\n" +
                            "você tem uma dívida com a Receita Federal\n" +
                            "que pode ser transferida para o seu CPF a qualquer momento.\n\n" +
                            "💡 Solução: procurar um contador para realizar a entrega das suas declarações\n" +
                            "e fazer o parcelamento da sua dívida."
                        )}>
                            Saiba mais
                        </Button>
                    </Card_Body>
                </Card>

                {/* Card 3 */}
                <Card>
                    <Card_Header_3>
                        <FaCheckCircle color="green" size={32} />
                    </Card_Header_3>
                    <Card_Body>
                        <CardTitle>Aberto ou fechado, mas com obrigações em dia</CardTitle>
                        <CardText>
                            Seu MEI está aberto ou fechado, mas os impostos foram pagos mensalmente e as declarações entregues
                        </CardText>
                        <Button onClick={() => openModal(
                            "Aberto ou fechado, mas com obrigações em dia",
                            "Se o seu MEI está em dia, parabéns! 🎉\n" +
                            "Todos os impostos foram pagos corretamente e as declarações entregues.\n\n" +
                            "💡 Solução: continue pagando seus impostos mensalmente\n" +
                            "e entregando suas declarações para manter a situação regular."
                        )}>
                            Saiba mais
                        </Button>
                    </Card_Body>
                </Card>

                {/* Card 4 */}
                <Card>
                    <Card_Header_4>
                        <FaExclamationTriangle color="white" size={32} />
                    </Card_Header_4>
                    <Card_Body>
                        <CardTitle>Com débitos, mas em parcelamento</CardTitle>
                        <CardText>
                            Você não pagou os impostos mensais, mas entrou em um acordo e fez o parcelamento e agora está em dia
                        </CardText>
                        <Button onClick={() => openModal(
                            "Com débitos, mas em parcelamento",
                            "Se você deixou de pagar seus impostos mensais,\n" +
                            "mas fez um acordo de parcelamento,\n" +
                            "a situação está regularizada enquanto o parcelamento estiver ativo.\n\n" +
                            "💡 Solução: mantenha suas parcelas em dia para não perder o benefício\n" +
                            "e continue pagando os próximos impostos normalmente."
                        )}>
                            Saiba mais
                        </Button>
                    </Card_Body>
                </Card>
            </Cards>

            <Button>Regularizar agora</Button>

            {/* Modal */}
            {isOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>
                            <h2>{modalTitle}</h2>
                            <CloseButton onClick={closeModal}>×</CloseButton>
                        </ModalHeader>
                        <ModalBody>
                            <p style={{ whiteSpace: "pre-line" }}>{modalText}</p>
                        </ModalBody>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Container>
    )
}
