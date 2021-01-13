import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9.875 14.944a.757.757 0 01-.403-.117L5.031 12H2.249a2.252 2.252 0 01-2.25-2.25v-3a2.252 2.252 0 012.25-2.25H5.03L11.424.431a2.252 2.252 0 013.575 1.819v6a.75.75 0 01-1.5 0v-6a.75.75 0 00-1.2-.6l-.046.032-6.601 4.201A.748.748 0 015.249 6h-3a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3c.143 0 .282.04.402.117l4.626 2.944a.75.75 0 01-.402 1.383z" />,
    <circle cx={17.249} cy={20.625} r={1.125} />,
    <path d="M17.249 18.75a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z" />,
    <path d="M13.023 24a2.528 2.528 0 01-2.258-3.654l4.226-8.451a2.513 2.513 0 012.262-1.396c.393 0 .771.089 1.124.266.486.243.887.644 1.13 1.13l4.226 8.451A2.526 2.526 0 0121.475 24h-8.452zm4.229-12c-.392 0-.744.217-.918.567l-4.226 8.451a1.025 1.025 0 00.915 1.483h8.452a1.026 1.026 0 00.917-1.483l-4.226-8.451a1.037 1.037 0 00-.458-.459 1.013 1.013 0 00-.456-.108z" />
  );

export default SvgVolumeControlWarning;