import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={4.749} cy={3.5} r={0.75} />,
    <circle cx={8.249} cy={3.5} r={0.75} />,
    <circle cx={4.749} cy={9.5} r={0.75} />,
    <circle cx={8.249} cy={9.5} r={0.75} />,
    <path d="M2.499 19a2.503 2.503 0 01-2.5-2.5v-2c0-.798.376-1.532 1.003-2a2.49 2.49 0 01-1.003-2v-2c0-.798.376-1.532 1.003-2a2.488 2.488 0 01-1.003-2v-2c0-1.379 1.121-2.5 2.5-2.5h17c1.378 0 2.5 1.121 2.5 2.5v2c0 .798-.376 1.532-1.003 2a2.488 2.488 0 011.003 2v2a.5.5 0 01-1 0v-2c0-.827-.673-1.5-1.5-1.5h-17c-.827 0-1.5.673-1.5 1.5v2c0 .827.673 1.5 1.5 1.5h11a.5.5 0 010 1h-11c-.827 0-1.5.673-1.5 1.5v2c0 .827.673 1.5 1.5 1.5h8.5a.5.5 0 010 1h-8.5zm0-18c-.827 0-1.5.673-1.5 1.5v2c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5h-17z" />,
    <circle cx={4.749} cy={15.5} r={0.75} />,
    <circle cx={8.249} cy={15.5} r={0.75} />,
    <circle cx={17.499} cy={20.75} r={0.75} />,
    <path d="M17.499 19a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5z" />,
    <path d="M12.443 23.997a1.436 1.436 0 01-1.28-2.096l5.056-9.633a1.45 1.45 0 012.556-.01l5.062 9.645c.233.443.214.982-.048 1.408a1.44 1.44 0 01-1.231.686H12.443zm5.055-11.5a.446.446 0 00-.396.238l-5.054 9.631a.426.426 0 00.014.419.45.45 0 00.38.211h10.114a.451.451 0 00.382-.212.422.422 0 00.013-.417l-5.056-9.635a.446.446 0 00-.397-.235z" />
  );

export default SvgServerWarning;