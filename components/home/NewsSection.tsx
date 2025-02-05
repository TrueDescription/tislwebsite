import React from "react";
import ReactMarkdown from "react-markdown";
import News from "./newsType";
import { CalendarIcon } from "lucide-react";

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

        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
            Latest News
          </h2>
          <ul className="space-y-4">
            {news
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((item) => (
                <li
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-4 border-l-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-start space-x-4">
                      <div className="flex-grow">
                        <time className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <div className="flex-shrink-0 mr-2">
                            <i
                              className={`${item.class} text-blue-600 dark:text-blue-300 text-xl`}
                              aria-hidden="true"
                            />
                          </div>{" "}
                          {new Date(item.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                        <ReactMarkdown
                          components={{
                            a: ({ href, children }) => {
                              const lastPart = href?.split("/").pop();
                              const url = href?.startsWith("http")
                                ? href
                                : href?.startsWith("publication/")
                                  ? `/publications/${lastPart}`
                                  : href?.startsWith("author/")
                                    ? `/people/${encodeURIComponent(lastPart?.split("-").join(" "))}`
                                    : undefined;

                              return (
                                <a
                                  href={url}
                                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-200"
                                >
                                  {children}
                                </a>
                              );
                            },
                          }}
                          className="prose prose-sm dark:prose-invert max-w-none"
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
