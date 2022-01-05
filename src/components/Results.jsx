import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player"; // 42:55

import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext(); // exporting everything from ResultContextProvider and use ResultContext as a hook
  const location = useLocation(); // this will give url for /images, /news, /videpos...

  // runs only at start of application
  useEffect(() => {
    getResults("/search/q=Javascript Mastery&num=40");
  }, []);

  // useEffect(() => {
  //   if (searchTerm !== "") {
  //     if (location.pathname === "/videos") {
  //       getResults(`/search/q=${searchTerm} videos`);
  //     } else {
  //       getResults(`${location.pathname}/q=${searchTerm}&num=40`);
  //     }
  //   }
  // }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  console.log(location.pathname);

  // switch statement, witch are going to decide how the results are going to look like
  // for example if we are on images we want to show images and coresponding look. news - cards, vodeos - iframes
  switch (location.pathname) {
    case "/search":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return "SEARCH";
    case "/news":
      return "SEARCH";
    case "/videos":
      return "SEARCH";
    default:
      return "ERROR";
  }
};
