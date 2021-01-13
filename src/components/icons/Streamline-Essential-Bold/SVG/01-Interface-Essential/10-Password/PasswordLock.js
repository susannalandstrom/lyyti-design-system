import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.125 12.625h9V7.267A1.619 1.619 0 0011.5 5.656h-.375V4.581a4.5 4.5 0 00-9 0v1.075H1.75A1.619 1.619 0 00.125 7.267v7.248a1.616 1.616 0 001.5 1.605v-1a2.5 2.5 0 012.5-2.495zm0-8.044a2.5 2.5 0 015 0v1.075h-5z" />,
    <path d="M22.125 14.375h-17a1.752 1.752 0 00-1.75 1.75v6a1.752 1.752 0 001.75 1.75h17a1.752 1.752 0 001.75-1.75v-6a1.752 1.752 0 00-1.75-1.75zm-17.25 7.75v-6a.25.25 0 01.25-.25h17a.25.25 0 01.25.25v6a.25.25 0 01-.25.25h-17a.25.25 0 01-.25-.25z" />,
    <path d="M9.436 19.125l.969-.97a.75.75 0 00-1.06-1.06l-.97.97-.97-.97a.75.75 0 00-1.06 1.06l.969.97-.969.97a.75.75 0 001.06 1.06l.97-.969.97.969a.75.75 0 101.06-1.06zM11.845 18.155l.969.97-.969.97a.749.749 0 000 1.06.76.76 0 001.06 0l.97-.969.97.969a.759.759 0 001.06 0 .749.749 0 000-1.06l-.969-.97.969-.97a.75.75 0 00-1.06-1.06l-.97.97-.97-.97a.75.75 0 00-1.06 1.06zM20 19.875h-2.125a.75.75 0 000 1.5H20a.75.75 0 000-1.5z" />
  );

export default SvgPasswordLock;