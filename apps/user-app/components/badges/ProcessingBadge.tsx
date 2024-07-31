export default function ProcessingBadge() {
    return <span
    className="inline-flex items-center justify-between rounded-md bg-amber-100 px-2.5 py-0.5 text-amber-700"
  >
   <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
    >
      <path d="M18 22H6v-6l4-4-4-4V2h12v6l-4 4 4 4M8 7.5l4 4 4-4V4H8m4 8.5l-4 4V20h8v-3.5M14 18h-4v-.8l2-2 2 2z" />
    </svg>
  
    <p className="whitespace-nowrap text-sm ml-1">Processing</p>
  </span>

}