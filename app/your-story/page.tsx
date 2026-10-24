import type { Metadata } from "next";
import QuickStart from "../components/QuickStart";
import Intake from "../components/Intake";

export const metadata: Metadata = {
  title: "Your Story – At His Table",
  description: "Tell us your story and meet the woman of the Bible whose story offers encouragement for your season.",
};

export default async function YourStoryPage({
  searchParams,
}: {
  searchParams: Promise<{ season?: string | string[]; quick?: string }>;
}) {
  const { season, quick } = await searchParams;
  const slug = typeof season === "string" ? season : undefined;
  // Her full story is the main path; the three-question start is the quick option.
  return quick === "1" ? <QuickStart seasonSlug={slug} /> : <Intake seasonSlug={slug} />;
}
