export default function SuccessBadge() {
    return <span
    className="inline-flex items-center justify-center rounded-md bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
        <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
    </svg>
        <p className="whitespace-nowrap text-sm ml-1">Success</p>
    </span>
    }