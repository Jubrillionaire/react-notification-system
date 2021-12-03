import styled from "styled-components";

const ToastContainer = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;
`;


const NotificationContainer = styled.div`
background: #fff;
transition: .3s ease;
position: relative;
pointer-events: auto;
overflow: hidden;
margin: 0 0 6px;
padding: 30px;
margin-bottom: 15px;
width: 300px;
max-height: 100px;
border-radius: 3px 3px 3px 3px;
box-shadow: 0 0 10px #999;
color: #000;
opacity: .9;
background-position: 15px;
background-repeat: no-repeat;

height: 50px;
width: 365px;
color: #fff;
padding: 20px 15px 10px 10px;
`;

const CancelButton = styled.button`
	position: relative;
	right: -.3em;
	top: -.3em;
	float: right;
	font-weight: 700;
	color: #fff;
	outline: none;
	border: none;
	text-shadow: 0 1px 0 #fff;
	opacity: .8;
	line-height: 1;
	font-size: 16px;
	padding: 0;
	cursor: pointer;
	background: 0 0;
	border: 0
`

const NotificationIconContainer = styled.div`
  width: 30px;
  height: 30px;
`;
const NotificationIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const NotificationTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
`;
const NotificationMessage = styled.p`
  margin: 0;
  text-align: left;
  height: 18px;
  margin-left: -1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


export {
  ToastContainer,
  NotificationContainer,
  CancelButton,
  NotificationIcon,
  NotificationIconContainer,
  NotificationTitle,
  NotificationMessage,
};