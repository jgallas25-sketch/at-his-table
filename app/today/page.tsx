import type { Metadata } from "next";
import TodayView from "../components/TodayView";

export const metadata: Metadata = { title: "Today – At His Table" };

export default async function TodayPage({ searchParams }: { searchParams: Promise<{ sample?: string }> }) {
  const { sample } = await searchParams;
  return <TodayView sample={sample === "1"} />;
}
