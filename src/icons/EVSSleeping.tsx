import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const EVSSleeping = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <circle r={12} transform="matrix(-1 0 0 1 12 12)" fillOpacity={0.1} />,
    <path d="m16.215 3.638.004-.427 1.661-2.03-1.547-.013.004-.477 2.269.019-.004.426-1.657 2.03 1.668.014-.004.478-2.394-.02ZM19.09 4.365l.003-.38 1.049-1.148-.997-.008.003-.438 1.672.014-.003.38-1.057 1.147 1.075.009-.004.438-1.741-.014ZM21.271 5.335l.004-.38 1.049-1.148-.997-.008.003-.438 1.672.013-.003.38-1.057 1.148 1.075.009-.004.438-1.742-.014Z" />,
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 11.999C3 7.037 7.03 3 11.982 3c4.953 0 8.983 4.037 8.983 8.999 0 4.962-4.03 8.999-8.983 8.999S3 16.96 3 11.999Zm16.081 3.717A7.988 7.988 0 0 0 19.994 12c0-4.425-3.594-8.026-8.012-8.026-2.095 0-4.004.81-5.434 2.134A8.076 8.076 0 0 0 4.754 8.54 7.982 7.982 0 0 0 3.971 12c0 4.425 3.594 8.026 8.011 8.026 2.201 0 4.197-.894 5.646-2.337a8.1 8.1 0 0 0 1.453-1.971Z"
    />,
    <path d="M10.337 13.53c1.268.512 1.995.546 3.324.1l-.03.973c-1.294.597-2.021.609-3.323-.101l.029-.973ZM7.625 9.95c1.367-.05 2.045-.317 3.076-1.266l.37.9c-.937 1.074-1.597 1.382-3.075 1.265l-.37-.9ZM16.481 10.072c-1.366-.065-2.04-.339-3.061-1.3l-.38.896c.925 1.084 1.582 1.4 3.061 1.3l.38-.896Z" />
  );

export default EVSSleeping;