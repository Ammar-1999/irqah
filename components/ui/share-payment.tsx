import { memo } from "react";

export const SharePayment = memo(({ width = "70%", height = "70%" }: { width?: string; height?: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.438 1.56207L31.4379 1.56201C30.9167 1.04084 30.143 0.864248 29.4472 1.10777L2.76004 10.4483L2.92522 10.9202L2.76004 10.4483C0.513351 11.2346 0.385672 14.3639 2.56088 15.3306L11.0828 19.1182L11.3678 19.2449L11.6069 19.0446L24.2493 8.45564L23.971 8.12335L24.2493 8.45563C24.3158 8.39991 24.3645 8.3954 24.396 8.39836C24.4366 8.40216 24.4873 8.42359 24.5318 8.46807C24.5763 8.51255 24.5977 8.56328 24.6015 8.60388C24.6044 8.63546 24.5999 8.6841 24.5442 8.75063L13.9553 21.3928L13.7551 21.6319L13.8817 21.917L17.6694 30.4391C18.6361 32.6143 21.7654 32.4867 22.5518 30.2399L31.8922 3.55273C32.1357 2.85701 31.9592 2.0833 31.438 1.56207Z"
        stroke="currentColor"
      />
    </svg>
  );
});

SharePayment.displayName = "SharePayment";
