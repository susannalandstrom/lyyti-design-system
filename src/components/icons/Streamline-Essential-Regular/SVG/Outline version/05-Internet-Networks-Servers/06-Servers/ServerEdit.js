import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={5.251} cy={5.25} r={1.125} />,
    <circle cx={5.251} cy={14.25} r={1.125} />,
    <path d="M5.251 19.5a5.256 5.256 0 01-5.25-5.25c0-1.865.979-3.56 2.548-4.5a5.236 5.236 0 01-2.548-4.5A5.256 5.256 0 015.251 0h12a5.257 5.257 0 015.251 5.249 5.236 5.236 0 01-2.383 4.4.752.752 0 01-1.038-.219.751.751 0 01.219-1.038 3.738 3.738 0 001.703-3.143A3.757 3.757 0 0017.252 1.5H5.251c-2.068 0-3.75 1.682-3.75 3.75S3.183 9 5.251 9h7.5a.75.75 0 010 1.5h-7.5a3.754 3.754 0 00-3.75 3.75A3.754 3.754 0 005.251 18h3a.75.75 0 010 1.5h-3z" />,
    <path d="M10.501 6a.75.75 0 010-1.5h6.75a.75.75 0 010 1.5h-6.75zM11.25 24a.743.743 0 01-.53-.22.745.745 0 01-.205-.677l.75-3.75a.748.748 0 01.205-.384l7.63-7.631a2.849 2.849 0 012.026-.838c.766 0 1.486.298 2.026.838l.039.041c.516.513.809 1.227.809 1.993 0 .765-.298 1.485-.839 2.026L15.53 23.03a.744.744 0 01-.384.205l-3.749.75a.733.733 0 01-.147.015zm.956-1.706l2.424-.485 7.47-7.47c.258-.258.399-.601.399-.965a1.355 1.355 0 00-.429-.996 1.324 1.324 0 00-.939-.379c-.368 0-.713.142-.972.401l-7.469 7.47-.484 2.424zM10.501 15a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z" />
  );

export default SvgServerEdit;