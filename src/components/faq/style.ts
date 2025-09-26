import styled from "styled-components"
import { pxToRem } from "../../utils/Utils"

export const FAQContainer = styled.section`
  width: 100%;
  max-width: ${pxToRem(800)};
  margin: ${pxToRem(40)} auto;
  padding: ${pxToRem(20)};
`

export const FAQTitle = styled.h2`
  font-size: ${pxToRem(28)};
  font-weight: 600;
  text-align: center;
  margin-bottom: ${pxToRem(24)};
`

export const FAQItem = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: ${pxToRem(12)} 0;
`

export const Question = styled.button`
  width: 100%;
  text-align: left;
  font-size: ${pxToRem(16)};
  font-weight: 500;
  padding: ${pxToRem(12)} 0;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.button};
  }
`

export const Answer = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ open }) => (open ? `${pxToRem(8)} 0` : "0")};
`;
