import { styled } from 'styled-components';

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
`;

export const Modal = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 600px;
  height: 400px;
  position: absolute;
  h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
`;
