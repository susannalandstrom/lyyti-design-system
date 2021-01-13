import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGaugeDashboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 20.25A2.252 2.252 0 010 18v-2.077a12.001 12.001 0 013.479-8.565 12.004 12.004 0 018.515-3.608C18.669 3.8 24.05 9.262 24 15.925V18a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5a.75.75 0 00.75-.75v-2.08c.043-5.839-4.668-10.624-10.503-10.67-5.83.046-10.541 4.83-10.497 10.666V18c0 .414.336.75.75.75h6a3.77 3.77 0 013.196-3.706l2.093-6.278a.747.747 0 01.95-.474.748.748 0 01.473.948l-1.966 5.899c1.598.443 2.755 1.924 2.755 3.611h5.999zm-7.5 0a2.255 2.255 0 00-2.213-2.249l-.037.002a2.254 2.254 0 00-2.25 2.247h4.5z" />,
    <circle cx={4.875} cy={15.375} r={1.125} />,
    <path d="M6.375 12.753c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125 1.125.505 1.125 1.125-.505 1.125-1.125 1.125z" />,
    <circle cx={19.125} cy={15.375} r={1.125} />,
    <path d="M17.625 12.753c-.62 0-1.125-.505-1.125-1.125a1.12 1.12 0 011.037-1.118.679.679 0 01.17-.001 1.119 1.119 0 011.042 1.119 1.125 1.125 0 01-1.124 1.125z" />,
    <circle cx={9.375} cy={8.628} r={1.125} />
  );

export default SvgGaugeDashboard;