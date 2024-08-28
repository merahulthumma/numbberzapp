import React from "react";
import { Metadata } from "next";
import ClientHomeWrapper from "@/components/ClientHomeWrapper";

export const metadata: Metadata = {
  title: "NumberzInsight | Futuristic Accounting Services",
  description:
    "Experience cutting-edge financial solutions with NumberzInsight. We offer AI-powered bookkeeping, quantum tax planning, and more.",
  keywords:
    "accounting, bookkeeping, tax planning, financial services, AI, quantum computing",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black">
      <ClientHomeWrapper />
    </div>
  );
}
