type IconName = "book" | "hands" | "heart" | "pen" | "play" | "sprout" | "praise";

const paths: Record<IconName, React.ReactNode> = {
  book: (
    <>
      <path d="M3 5.5C5.5 4.5 8.5 4.5 12 6.5c3.5-2 6.5-2 9-1v13c-2.5-1-5.5-1-9 1-3.5-2-6.5-2-9-1z" />
      <path d="M12 6.5v13" />
    </>
  ),
  hands: (
    <>
      <path d="M12 21c-1.5-2-6-4-6-9V6.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M12 21c1.5-2 6-4 6-9V6.5a1.5 1.5 0 0 0-3 0V11" />
      <path d="M12 21V9" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  pen: (
    <>
      <path d="M4 20h4L19 9l-4-4L4 16z" />
      <path d="M13.5 6.5l4 4" />
    </>
  ),
  praise: (
    <>
      <circle cx="12" cy="13" r="3.5" />
      <path d="M12 4v2.5M5.6 6.6l1.8 1.8M18.4 6.6l-1.8 1.8M3.5 13H6M18 13h2.5M4 20h16" />
    </>
  ),
  play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />,
  sprout: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4 3-6 7-6 0 4-3 6-7 6z" />
      <path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" />
    </>
  ),
};

export default function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
