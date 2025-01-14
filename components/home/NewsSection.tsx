import React from "react";
import ReactMarkdown from "react-markdown";
import News from "./newsType";

interface NewsSectionProps {
  news: News[];
}
export default function NewsSection({ news }: NewsSectionProps) {
  console.log(news);
  // news.map((item) => {
  //   console.log(item);
  // });
  if (!Array.isArray(news)) {
    return (
      <div className="container mx-auto my-12 px-4">
        <style>
          {`
          a {
            color: blue;
            text-decoration: underline;
          }
          a:hover {
            color: darkblue;
          }
        `}
        </style>
        <div className="row justify-center">
          <div className="section-heading col-12 mb-8 text-center">
            <h1 className="text-3xl font-bold">News</h1>
          </div>

          <div className="col-12">
            <ul className="space-y-6"></ul>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto my-12 px-4">
      <style>
        {`
          a {
            color: blue;
            text-decoration: underline;
          }
          a:hover {
            color: darkblue;
          }
        `}
      </style>
      <div className="row justify-center">
        <div className="section-heading col-12 mb-8 text-center">
          <h1 className="text-3xl font-bold">News</h1>
        </div>

        <div className="col-12">
          <ul className="space-y-6">
            {news
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              ) // Sort by date
              .map((item) => {
                return (
                  <li
                    key={item.id}
                    className="inline-flex items-center text-lg leading-relaxed mr-4"
                  >
                    <i className={`${item.class} mr-2`} aria-hidden="true"></i>
                    <strong>{item.date}</strong>,{" "}
                    <ReactMarkdown
                      components={{
                        a: ({ href, children }) => {
                          // Extract the last part of the href path
                          const lastPart = href?.split("/").pop();
                          return (
                            <a
                              href={`people/${lastPart}`}
                              className="text-blue-500 underline"
                            >
                              {children}
                            </a>
                          );
                        },
                      }}
                    >
                      {item.content}
                    </ReactMarkdown>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
