export function FailedBadge() {
    return (
        <span className="inline-flex items-center gap-1 rounded-md bg-rose-100 px-2.5 py-0.5 text-rose-700">
            <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5"
            >
                <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM5.354 4.646a.5.5 0 10-.708.708L7.293 8l-2.647 2.646a.5.5 0 00.708.708L8 8.707l2.646 2.647a.5.5 0 00.708-.708L8.707 8l2.647-2.646a.5.5 0 00-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
            <span className="text-sm whitespace-nowrap ml-1">Failed</span>
        </span>
    )
}
