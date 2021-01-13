import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonShuffle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.5 10.5a.5.5 0 01-.459-.302C10.027 10.166 8.618 7 6 7H.5a.5.5 0 010-1H6c3.293 0 4.893 3.648 4.96 3.803a.5.5 0 01-.46.697z" />,
    <path d="M.5 18a.5.5 0 010-1H6c2.226 0 3.93-2.678 5.578-5.268C13.371 8.914 15.225 6 18 6h4.566l-1.482-2.224c-.074-.111-.101-.245-.074-.375a.496.496 0 01.49-.402c.168 0 .323.083.416.223l2 3a.54.54 0 01.052.106.484.484 0 01-.001.344c-.005.016-.014.033-.023.051a.29.29 0 01-.027.052l-2.001 3.002a.5.5 0 11-.832-.555L22.565 7H18c-2.225 0-3.93 2.678-5.578 5.268C10.628 15.086 8.774 18 6 18H.5z" />,
    <path d="M21.5 20.999a.5.5 0 01-.416-.777L22.565 18H18c-3.228 0-5.328-3.091-5.416-3.223-.074-.111-.101-.244-.074-.375A.496.496 0 0113 14a.5.5 0 01.416.222C13.435 14.25 15.317 17 18 17h4.566l-1.482-2.224a.5.5 0 11.832-.554l2 3a.755.755 0 01.052.106.488.488 0 01.03.2.509.509 0 01-.056.199.227.227 0 01-.026.049l-2 3a.497.497 0 01-.416.223z" />
  );

export default SvgButtonShuffle;