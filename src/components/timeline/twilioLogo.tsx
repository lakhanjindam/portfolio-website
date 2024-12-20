export function TwilioLogo({ className = '', width = 512, height = 512 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-label="Twilio"
      role="img"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      className={className}
    >
      <rect
        width="512"
        height="512"
        rx="15%"
        fill="#ffffff"
      />
      <g fill="#f22f46">
        <circle cx="256" cy="256" r="256" />
        <circle cx="256" cy="256" fill="#ffffff" r="188" />
        <circle cx="193" cy="193" r="53" id="c" />
        <use xlinkHref="#c" x="126" />
        <use xlinkHref="#c" y="126" />
        <use xlinkHref="#c" x="126" y="126" />
      </g>
    </svg>
  )
}

