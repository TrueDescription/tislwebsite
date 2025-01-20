import React from "react";
import ReactMarkdown from "react-markdown";
import News from "./newsType";

interface NewsSectionProps {
  news: News[];
}
export default function NewsSection({ news }: NewsSectionProps) {
  // console.log(news);
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

        <div className="max-w-4xl mx-auto px-4">
          <ul className="space-y-8 list-disc pl-8">
            {news
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((item) => (
                <li key={item.id} className="pl-2">
                  <div className="flex items-start space-x-4">
                    <div className=" w-5 h-5 mt-1 mr-1">
                      <i className={`${item.class} mr-2`} aria-hidden="true" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col space-y-1">
                        <time className="">
                          {new Date(item.date)
                            .toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                            .replace(", ", ",\u00A0")}
                        </time>
                        <ReactMarkdown
                          components={{
                            a: ({ href, children }) => {
                              const lastPart = href?.split("/")[1];
                              console.log(href);
                              return (
                                <a
                                  href={
                                    href?.startsWith("http")
                                      ? href
                                      : href?.startsWith("publication/")
                                        ? `publications/${lastPart}`
                                        : href?.startsWith("author/")
                                          ? `people/${lastPart}`
                                          : undefined
                                  }
                                  className="text-blue-600 underline"
                                >
                                  {children}
                                </a>
                              );
                            },
                          }}
                          className="text-left"
                        >
                          {item.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
