import React, { useState } from "react";

import Toast from "../toast/Toast";
import checkIcon from "../../assets/check.svg";
import errorIcon from "../../assets/error.svg";
import infoIcon from "../../assets/info.svg";
import warningIcon from "../../assets/warning.svg";
import Button from "../button/Button";
import { buttonData } from "../button/buttonData";
import {
  ToastButtons,
  CheckBox,
  InputContainer,
  Input,
  Title,
  SelectContainer,
  Container,
  Select
} from "./AppStyled";

const App = () => {
  const [toastPosition, setToastPosition] = useState("top-right");
  const [checkValue, setCheckValue] = useState(false);
  const [autoDeleteTime, setAutoDeleteTime] = useState(0);
  let [toastDetails] = useState(null);
  const [toastList, setToastList] = useState([]);
  const [dismissTime, setDismissTime] = useState(0);

  const handleToastPosition = (e) => {
    setToastPosition(e.target.value);
    setToastList([]);
  };

  const handleToastShow = (type) => {
    switch (type) {
      case "success":
        toastDetails = {
          id: 1,
          toastTitle: "Success",
          toastBody: "This is a success toast component",
          backgroundColor: "#5cb85c",
          icon: checkIcon,
        };
        break;
      case "danger":
        toastDetails = {
          id: 2,
          toastTitle: "Danger",
          toastBody: "This is a error toast component",
          backgroundColor: "#d9534f",
          icon: errorIcon,
        };
        break;
      case "info":
        toastDetails = {
          id: 3,
          toastTitle: "Info",
          toastBody: "This is an info toast component",
          backgroundColor: "#5bc0de",
          icon: infoIcon,
        };
        break;
      case "warning":
        toastDetails = {
          id: 4,
          toastTitle: "Warning",
          toastBody: "This is a warning toast component",
          backgroundColor: "#f0ad4e",
          icon: warningIcon,
        };
        break;

      default:
        setToastList([]);
    }

    setToastList([...toastList, toastDetails]);
  };

  const onCheckBoxChange = () => {
    setCheckValue(!checkValue);
    setToastList([]);
  };

  const onInputChange = (e) => {
    const time = parseInt(e.target.value, 10);
    setDismissTime(time);
  };

  return (
    <>
      <Container>
        <Title>React Notification System</Title>
        <ToastButtons>
          {buttonData.map((e) => (
            <Button
              key={e.id}
              className={e.className}
              label={e.label}
              handleClick={() => handleToastShow(e.type)}
            />
          ))}
        </ToastButtons>

        <InputContainer>
          <CheckBox
            id="auto"
            type="checkbox"
            name="checkbox"
            value={checkValue}
            onChange={onCheckBoxChange}
          />
          <label htmlFor="auto">Auto Dismiss</label>
        </InputContainer>
        <InputContainer>
          <Input
            type="number"
            name="checkbox"
            placeholder="Example: 3000"
            autoComplete="false"
            onChange={onInputChange}
          />
        </InputContainer>

        <SelectContainer>
          <label>select toast position </label>
          <Select
            name="position"
            value={toastPosition}
            onChange={handleToastPosition}
            className="position-select"
          >
            <option>Select Position</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
          </Select>
        </SelectContainer>
      </Container>
      <Toast
        toastList={toastList}
        toastPosition={toastPosition}
        autoDelete={checkValue}
        autoDeleteTime={autoDeleteTime}
        dismissTime={dismissTime}
      />
    </>
  );
};

export default App;
