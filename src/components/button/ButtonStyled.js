import styled from "styled-components";

const ToastButtons = styled.button`
  color: white;
  font-size: 14px;
  font-weight: bold;
  width: 100px;
  height: 50px;
  margin: 0 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) =>
    props.className === "success"
      ? "#5cb85c"
      : props.className === "danger"
      ? "#d9534f"
      : props.className === "info"
      ? "#5bc0de"
      : "#f0ad4e"};
`;

export { ToastButtons };
