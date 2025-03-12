import HomeNavbar from "@/components/home/HomeNavbar";
import React from "react";
import ReactMarkdown from "react-markdown";
import "@/styles/infoMarkdown.css";

export default function Contact({
  contactContentData,
}: {
  contactContentData: string;
}) {
  return (
    <div>
      <HomeNavbar />
      <div className="container mx-auto my-12 px-4 markdown-content">
        <ReactMarkdown>{contactContentData}</ReactMarkdown>
      </div>
    </div>
  );
}
