import React from "react";
import HomeNavbar from "@/components/home/HomeNavbar";
import InfoSection from "@/components/home/InfoSection";
import ResearchAgenda from "@/components/home/ResearchAgenda";
import NewsSection from "@/components/home/NewsSection";

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
