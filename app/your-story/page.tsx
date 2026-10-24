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
  searchParams: Promise<{ season?: string | string[]; full?: string }>;
}) {
  const { season, full } = await searchParams;
  const slug = typeof season === "string" ? season : undefined;
  return full === "1" ? <Intake seasonSlug={slug} /> : <QuickStart seasonSlug={slug} />;
}
