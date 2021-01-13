import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20.25 24a.75.75 0 01-.75-.75v-.75h-15v.75a.75.75 0 01-1.5 0v-.75h-.75A2.252 2.252 0 010 20.25v-4.5a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 15.75v4.5a2.252 2.252 0 01-2.25 2.25H21v.75a.75.75 0 01-.75.75zm-18-9a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H2.25z" />,
    <circle cx={19.125} cy={17.625} r={1.125} />,
    <path d="M5.25 19.5a.75.75 0 010-1.5h8.25a.75.75 0 010 1.5H5.25zM15.75 10.829c-1.241 0-2.25-1.009-2.25-2.25a2.252 2.252 0 013-2.121V3A2.249 2.249 0 0118.204.823l3-.75a2.24 2.24 0 012.132.586c.426.423.662.988.664 1.588v4.832c0 1.241-1.009 2.25-2.25 2.25S19.5 8.32 19.5 7.079a2.252 2.252 0 013-2.121V2.25a.75.75 0 00-.932-.723l-3 .75a.75.75 0 00-.568.726v5.576a2.252 2.252 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm6-1.5a.75.75 0 100 1.5.75.75 0 000-1.5zM2.6 12.025a.746.746 0 01-.714-.522 8.192 8.192 0 01.533-6.29A8.19 8.19 0 017.24 1.137a8.235 8.235 0 012.506-.39c1.815 0 3.606.611 5.043 1.72a.75.75 0 01-.917 1.188 6.785 6.785 0 00-4.126-1.408c-.696 0-1.386.107-2.05.319a6.699 6.699 0 00-3.945 3.335 6.704 6.704 0 00-.436 5.146.75.75 0 01-.715.978z" />,
    <path d="M9.753 12.003a2.978 2.978 0 01-2.398-1.192A3.004 3.004 0 019.751 6c.7 0 1.384.25 1.926.704a.751.751 0 01-.964 1.15 1.504 1.504 0 00-.963-.353 1.502 1.502 0 00-1.197 2.406 1.49 1.49 0 001.199.596c.328 0 .639-.104.901-.302a.754.754 0 011.05.147.75.75 0 01-.147 1.05 2.964 2.964 0 01-1.803.605z" />
  );

export default SvgCdPlayer;