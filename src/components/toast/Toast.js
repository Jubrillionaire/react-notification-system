import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  NotificationContainer,
  ToastContainer,
  CancelButton,
  NotificationIcon,
  NotificationIconContainer,
  NotificationMessage,
  NotificationTitle,
} from "./StyledToast";

const Toast = (props) => {
  const { toastList, toastPosition, autoDelete, dismissTime } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, dismissTime, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <>
      <ToastContainer toastPosition={toastPosition} className={toastPosition}>
    
        {list.map((toast, i) => (
          <NotificationContainer
            key={i}
            className={`${toastPosition}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <CancelButton onClick={() => deleteToast(toast.id)}>X</CancelButton>
            <NotificationIconContainer className="notification-image">
              <NotificationIcon src={toast.icon} alt="" />
            </NotificationIconContainer>
            <div>
              <NotificationTitle className="notification-title">
                {toast.toastTitle}
              </NotificationTitle>
              <NotificationMessage className="notification-message">
                {toast.toastBody}
              </NotificationMessage>
            </div>
          </NotificationContainer>
        ))}
      
      </ToastContainer>
    </>
  );
};

Toast.propTypes = {
  toastList: PropTypes.array.isRequired,
  position: PropTypes.string,
  autoDelete: PropTypes.bool,
  dismissTime: PropTypes.number,
};

export default Toast;
