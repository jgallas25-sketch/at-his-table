import type { Metadata } from "next";
import WelcomeIntro from "../components/WelcomeIntro";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
export const metadata: Metadata = { title: "Let Heather Show You – At His Table", description: "A simple, one-minute introduction to your time at the table: share your season, spend time with Jesus, and reflect if you’d like." };
export default function WelcomePage() {
  return <><SiteHeader /><main><WelcomeIntro full /></main><SiteFooter /></>;
}
