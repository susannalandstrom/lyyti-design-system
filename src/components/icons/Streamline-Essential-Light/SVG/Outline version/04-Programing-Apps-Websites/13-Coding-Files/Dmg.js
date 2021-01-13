import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDmg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 19.504c-.827 0-1.5-.673-1.5-1.5v-12c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5h-21zm0-14a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-21z" />,
    <path d="M5.5 15.5A.5.5 0 015 15V9a.5.5 0 01.5-.5C7.43 8.5 9 10.07 9 12s-1.57 3.5-3.5 3.5zm.5-1.051c1.141-.235 2-1.262 2-2.45S7.141 9.785 6 9.55v4.899zM13.5 15.504a.5.5 0 01-.5-.5v-3.882l-.553 1.106c-.082.164-.253.265-.447.265s-.365-.102-.447-.265L11 11.122v3.882a.5.5 0 01-1 0v-6a.499.499 0 01.947-.224L12 10.886l1.053-2.106a.504.504 0 01.564-.263.499.499 0 01.383.487v6a.5.5 0 01-.5.5zM17 15.5c-1.103 0-2-.897-2-2v-3c0-1.103.897-2 2-2s2 .897 2 2v.5a.5.5 0 01-1 0v-.5a1.001 1.001 0 00-2 0v3a1 1 0 002 0h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5v.5c0 1.103-.897 2-2 2z" />
  );

export default SvgDmg;