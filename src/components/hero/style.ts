import styled from "styled-components"
import { pxToRem } from "../../utils/Utils"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: ${pxToRem(80)}
`

export const Text = styled.p`
    font-size: ${pxToRem(20)};
    margin-top: ${pxToRem(10)};
`
export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${pxToRem(20)};
`
export const Card = styled.div`
  border-radius: ${pxToRem(12)};
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  overflow: hidden;
  width: ${pxToRem(250)};
  display: flex;
  flex-direction: column;
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(40)};
`

export const Card_Header_1 = styled.div`
    background-color: ${({ theme }) => theme.colors.card_1};
    height: ${pxToRem(80)};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Card_Header_2 = styled.div`
    background-color: ${({ theme }) => theme.colors.card_2};
    height: ${pxToRem(80)};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Card_Header_3 = styled.div`
    background-color: ${({ theme }) => theme.colors.card_3};
    height: ${pxToRem(80)};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Card_Header_4 = styled.div`
    background-color: ${({ theme }) => theme.colors.card_4};
    height: ${pxToRem(80)};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Card_Body = styled.div`
    padding: ${pxToRem(20)};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(12)}; 
`
export const CardTitle = styled.h3`
  font-size: ${pxToRem(18)};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`
export const CardText = styled.p`
  font-size: ${pxToRem(14)};y
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  text-align: center;
`
