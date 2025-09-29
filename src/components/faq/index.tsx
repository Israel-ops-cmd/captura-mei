import React, { useState } from "react"
import { FAQContainer, FAQItem, FAQTitle, Question, Answer } from "./style"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const faqData = [
  {
    question: "Como saber se o meu MEI está inapto?",
    answer: "Se você abriu um MEI e parou de usá-lo sem encerrar, seu CNPJ está inapto."
  },
  {
    question: "Como faço para regularizar meu MEI?",
    answer: "Você pode contatar um contador para ele gerar os boletos DAS e pagar. Em casos de dívidas maiores, parcelar os seus débitos."
  },
  {
    question: "Quais são os benefícios de ser MEI?",
    answer: "Direito a CNPJ, emissão de nota fiscal, benefícios do INSS e aposentadoria e facilidades para crédito bancário."
  },
  {
    question: "O que acontece se eu não pagar o DAS?",
    answer: "Você acumula débitos, perde benefícios do INSS e pode ter o CNPJ cancelado."
  },
  {
    question: "Se eu regularizar o MEI, eu volto a ter direito aos benefícios?",
    answer: "Sim. Uma vez que os débitos são regularizados o microempreendedor volta a ter direito aos benefícios"
  },
  {
    question: "Mesmo sem usar o MEI, eu ainda preciso pagar os impostos?",
    answer: "Sim. Se o MEI estiver aberto é obrigatório pagar os impostos. Se não quiser mais usá-lo, o correto é encerrá-lo."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <FAQContainer id="faq">
      <FAQTitle>Perguntas Frequentes</FAQTitle>
      {faqData.map((item, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggle(index)}>
            {item.question}
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </Question>
          <Answer open={openIndex === index}>{item.answer}</Answer>
        </FAQItem>
      ))}
    </FAQContainer>
  )
}
