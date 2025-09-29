import styled from "styled-components"
import { pxToRem } from "../../utils/Utils"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${pxToRem(12)};
  padding: ${pxToRem(20)};
  width: 90%;
  max-width: ${pxToRem(500)};
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${pxToRem(10)};

  h2 {
    font-size: ${pxToRem(20)};
    margin: 0;
  }
`

export const ModalBody = styled.div`
  font-size: ${pxToRem(16)};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: ${pxToRem(24)};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`
