import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArduinoCircuit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.25 9a.75.75 0 01-.75-.75V6A.75.75 0 016 6v2.25a.75.75 0 01-.75.75z" />,
    <path d="M3.75 24a2.252 2.252 0 01-2.25-2.25V10.371A2.258 2.258 0 010 8.25v-3c0-.96.615-1.808 1.5-2.121V2.25A2.252 2.252 0 013.75 0h15A2.252 2.252 0 0121 2.25v7.036l1.756.878A2.237 2.237 0 0124 12.177v4.146c0 .858-.476 1.629-1.244 2.013L21 19.214v2.536A2.252 2.252 0 0118.75 24h-15zm0-22.5a.75.75 0 00-.75.75v1.5c0 .414-.336.75-.75.75s-.75.336-.75.75v3c0 .414.336.75.75.75s.75.336.75.75v12c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-3c0-.286.159-.543.415-.671l2.171-1.085a.746.746 0 00.415-.671v-4.146a.746.746 0 00-.415-.671l-2.171-1.085a.746.746 0 01-.415-.671v-7.5a.75.75 0 00-.75-.75h-15z" />,
    <path d="M9 10.5c-.827 0-1.5-.673-1.5-1.5V6c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H9zM9 9h3V6H9v3z" />,
    <circle cx={16.5} cy={5.25} r={1.125} />,
    <circle cx={16.5} cy={9.75} r={1.125} />,
    <path d="M5.25 21a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75H6v-.75a.75.75 0 011.5 0v.75h3v-.75a.75.75 0 011.5 0v.75h3v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-12zm11.25-1.5V18H6v1.5h10.5z" />
  );

export default SvgArduinoCircuit;