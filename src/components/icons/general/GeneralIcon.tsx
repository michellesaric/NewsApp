import React from "react";
interface Props {
  color: string;
}

function GeneralIcon({ color }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5 5.83332C18.8807 5.83332 20 6.95261 20 8.33332V16.6667C20 18.2775 18.6942 19.5833 17.0833 19.5833H2.91667C1.30584 19.5833 0 18.2775 0 16.6667V2.08332C0 1.16285 0.746192 0.416656 1.66667 0.416656H14.1667C15.0871 0.416656 15.8333 1.16285 15.8333 2.08332V5.83332H17.5ZM1.66667 16.6667C1.66667 17.357 2.22631 17.9167 2.91667 17.9167L13.855 17.9158C13.9839 17.9158 14.1054 17.8561 14.1843 17.7543C14.2632 17.6524 14.2905 17.5198 14.2583 17.395C14.1972 17.1571 14.1664 16.9123 14.1667 16.6667V2.49999C14.1667 2.26987 13.9801 2.08332 13.75 2.08332H2.08333C1.85321 2.08332 1.66667 2.26987 1.66667 2.49999V16.6667ZM18.3333 16.6667C18.3333 17.357 17.7737 17.9167 17.0833 17.9167C16.393 17.9167 15.8333 17.357 15.8333 16.6667V7.91666C15.8333 7.68654 16.0199 7.49999 16.25 7.49999H17.5C17.9602 7.49999 18.3333 7.87309 18.3333 8.33332V16.6667ZM4.585 3.74999C4.0097 3.74999 3.54333 4.21636 3.54333 4.79166V8.74999C3.54333 9.32529 4.0097 9.79166 4.585 9.79166H7.29333C7.86863 9.79166 8.335 9.32529 8.335 8.74999V4.79166C8.335 4.21636 7.86863 3.74999 7.29333 3.74999H4.585ZM10.6258 5.03916H12.2925C12.6377 5.03916 12.9175 5.31898 12.9175 5.66416V6.08082C12.9175 6.426 12.6377 6.70582 12.2925 6.70582H10.6258C10.4603 6.70627 10.3014 6.64093 10.184 6.52419C10.0666 6.40745 10.0004 6.24886 10 6.08332V5.66666C9.99956 5.50039 10.0653 5.34078 10.1827 5.22305C10.3001 5.10532 10.4596 5.03916 10.6258 5.03916ZM12.2925 8.37249H10.6258C10.4596 8.37249 10.3001 8.43865 10.1827 8.55638C10.0653 8.67411 9.99956 8.83372 10 8.99999V9.41666C10.0014 9.76118 10.2813 10.0396 10.6258 10.0392H12.2925C12.6377 10.0392 12.9175 9.75933 12.9175 9.41416V8.99749C12.9175 8.65231 12.6377 8.37249 12.2925 8.37249ZM3.95917 11.7058H12.2925C12.6377 11.7058 12.9175 11.9856 12.9175 12.3308V12.7475C12.9175 13.0927 12.6377 13.3725 12.2925 13.3725H3.95917C3.61464 13.373 3.33471 13.0945 3.33333 12.75V12.3333C3.33289 12.1671 3.39863 12.0074 3.51605 11.8897C3.63346 11.772 3.7929 11.7058 3.95917 11.7058ZM10.2083 15.0392H3.95833C3.79214 15.0392 3.63279 15.1053 3.51551 15.2231C3.39822 15.3408 3.33267 15.5005 3.33333 15.6667V16.0833C3.33425 16.4277 3.61394 16.7063 3.95833 16.7058H10.2083C10.5535 16.7058 10.8333 16.426 10.8333 16.0808V15.6642C10.8333 15.319 10.5535 15.0392 10.2083 15.0392Z"
        fill={color}
      />
    </svg>
  );
}

export default GeneralIcon;
