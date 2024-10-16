import React from "react";
import HomeNavbar from "@/components/HomeNavbar";
import InfoSection from "@/components/InfoSection";
import ResearchAgenda from "@/components/ResearchAgenda";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div>
      <HomeNavbar/>
      <InfoSection/>
      <ResearchAgenda/>
      <NewsSection/>
    </div>
  );
}
