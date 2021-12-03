import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const ToastButtons = styled.div`
  display: flex;
`;

const InputContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 1.5rem;
`;

const CheckBox = styled.input`
  display: block;
  margin: 2rem;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  position: relative;
  padding: 0px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  color: #fff;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
    0.1s padding ease-in-out;
`;

const Select = styled.select`
  width: 100%;
  height: 46px;
  position: relative;
  padding: 0px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  color: #fff;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
    0.1s padding ease-in-out;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-size: 2.1rem;
  letter-spacing: 2px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto
  margin-top: 10px;
`;



export {
  ToastButtons,
  CheckBox,
  InputContainer,
  Input,
  Title,
  SelectContainer,
  Container,
  Select
};
