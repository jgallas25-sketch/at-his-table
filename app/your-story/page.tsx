import type { Metadata } from "next";
import Intake from "../components/Intake";

export const metadata: Metadata = {
  title: "Your Story – At His Table",
  description: "Tell us your story and meet the woman of the Bible who has walked where you are.",
};

export default async function YourStoryPage({
  searchParams,
}: {
  searchParams: Promise<{ season?: string | string[] }>;
}) {
  const { season } = await searchParams;
  return <Intake seasonSlug={typeof season === "string" ? season : undefined} />;
}
