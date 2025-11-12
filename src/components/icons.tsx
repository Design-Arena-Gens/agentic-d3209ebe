export function IconPulseSignal() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 21C6 12.7157 12.7157 6 21 6C29.2843 6 36 12.7157 36 21"
        stroke="url(#pulse)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M10 21C10 15.4772 14.4772 11 20 11C25.5228 11 30 15.4772 30 21"
        stroke="url(#pulse)"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M14.5 23.5L17.5 18L20.5 23.5L22.2 20.7L24.8 23.5"
        stroke="url(#pulse)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="pulse" x1="6" y1="6" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#77D1FF" />
          <stop offset="0.5" stopColor="#A387FF" />
          <stop offset="1" stopColor="#FF7DE9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconRadar() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21" cy="21" r="12" stroke="url(#radar)" strokeWidth="2.4" opacity="0.75" />
      <circle cx="21" cy="21" r="6" stroke="url(#radar)" strokeWidth="2.4" />
      <path
        d="M22 19L30 11"
        stroke="url(#radar)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="11" r="2" fill="#FF7DE9" />
      <defs>
        <linearGradient id="radar" x1="9" y1="9" x2="33" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7DE9" />
          <stop offset="1" stopColor="#77D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconTether() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 13.5C13 16.5376 15.4624 19 18.5 19C21.5376 19 24 16.5376 24 13.5C24 10.4624 21.5376 8 18.5 8C15.4624 8 13 10.4624 13 13.5Z"
        stroke="url(#tether)"
        strokeWidth="2.4"
      />
      <path
        d="M18.5 24.5V28C18.5 32.6944 22.3056 36.5 27 36.5C31.6944 36.5 35.5 32.6944 35.5 28C35.5 23.3056 31.6944 19.5 27 19.5C26.0329 19.5 25.1033 19.675 24.2394 19.9957"
        stroke="url(#tether)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M20 24.5H18.5C13.8056 24.5 10 28.3056 10 33C10 33.6929 10.065 34.3685 10.1874 35.022"
        stroke="url(#tether)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="tether" x1="10" y1="8" x2="35.5" y2="36.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A387FF" />
          <stop offset="1" stopColor="#77D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconSpark() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 6L22.8 15.2L30 12L22.8 20.8L30 24L22.8 30.8L25.9 36L21 32.4L16.1 36L19.2 30.8L12 24L19.2 20.8L12 12L19.2 15.2L21 6Z"
        stroke="url(#spark)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="spark" x1="12" y1="6" x2="30" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7DE9" />
          <stop offset="1" stopColor="#77D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
