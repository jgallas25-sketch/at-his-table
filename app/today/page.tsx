import type { Metadata } from "next";
import TodayView from "../components/TodayView";

export const metadata: Metadata = { title: "Today – At His Table" };

export default function TodayPage() {
  return <TodayView />;
}
