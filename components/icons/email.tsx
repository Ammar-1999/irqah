import { memo } from "react";

const MailIcon = memo(() => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 2.20431V15.168L15.9416 8.84553L14.9803 9.61477L20.088 16H0.987693L6.09539 9.61477L5.13416 8.84553L0.0756989 15.168V2.2043L10.5372 11.2763L21 2.20431ZM20.9993 0V0.573533L10.5377 9.64553L0.0761893 0.573544V0H20.9993Z"
        fill="white"
      />
    </svg>
  );
});

MailIcon.displayName = "MailIcon";

export default MailIcon;
