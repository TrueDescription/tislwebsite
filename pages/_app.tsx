import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "academicons/css/academicons.min.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [authors, setAuthors] = useState(null);
  const [publications, setPublications] = useState(null);
  const [news, setNews] = useState(null);
  const [teachingContentData, setTeachingContent] = useState("");
  const [joinUsContentData, setJoinUsContent] = useState("");
  const [contactContentData, setContactContent] = useState("");

  useEffect(() => {
    async function fetchData() {
      const authors = await fetch("/api/authors");
      const publications = await fetch("/api/publications");
      const news = await fetch("/api/news");
      const teachingContent = await fetch("/api/admin/teaching");
      const joinUsContent = await fetch("/api/admin/joinus");
      const contactContent = await fetch("/api/admin/contact");

      const authorsData = await authors.json();
      setAuthors(authorsData);
      const pubData = await publications.json();
      setPublications(pubData);
      const newsData = await news.json();
      setNews(newsData);

      const teachingData = await teachingContent.json();
      setTeachingContent(teachingData.content);
      console.log(teachingData.content);
      const joinUsData = await joinUsContent.json();
      setJoinUsContent(joinUsData.content);
      const contactData = await contactContent.json();
      setContactContent(contactData.content);
    }
    fetchData();
  }, []);
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider defaultTheme="light">
        <Component
          {...pageProps}
          authors={authors}
          publications={publications}
          news={news}
          teachingContentData={teachingContentData}
          joinUsContentData={joinUsContentData}
          contactContentData={contactContentData}
        />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
