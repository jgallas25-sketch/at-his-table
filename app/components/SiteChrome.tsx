import Link from "next/link";

const navLinks = [
  { href: "/#vision", label: "The Vision" },
  { href: "/#martha", label: "Martha’s Story" },
  { href: "/#series", label: "The Series" },
  { href: "/#seasons", label: "Every Season" },
  { href: "/#story", label: "Your Story" },
  { href: "/about", label: "About Us" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" aria-label="At His Table home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt="At His Table" style={{ height: 44, width: "auto" }} />
      </Link>
      <nav aria-label="Main">
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="header-cta">
        <Link href="/today" className="sign-in" style={{ fontSize: 15, textDecoration: "none" }}>
          Sign In
        </Link>
        <Link href="/your-story" className="btn">
          Take Your Seat
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        padding: "36px 5%",
        borderTop: "1px solid var(--line)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo.png" alt="At His Table" style={{ height: 39, width: "auto" }} />
      <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: 24, fontSize: 14 }}>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <div style={{ display: "flex", gap: 20, fontSize: 13 }}>
        <a href="#">Terms</a>
        <Link href="/care">Care &amp; Privacy</Link>
        <a href="mailto:jgallas25@gmail.com">Contact</a>
      </div>
    </footer>
  );
}

const tabs = [
  { href: "/today", label: "Today" },
  { href: "/planner", label: "Planner" },
  { href: "/journal", label: "Journal" },
  { href: "/#series", label: "Series" },
];

export function AppTabBar({ active }: { active: "/today" | "/planner" | "/journal" }) {
  return (
    <nav className="tabbar" aria-label="App">
      {tabs.map((t) => (
        <Link key={t.href} href={t.href} aria-current={t.href === active ? "page" : undefined}>
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
